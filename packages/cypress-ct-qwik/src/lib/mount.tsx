import type { JSXNode, RenderResult, FunctionComponent } from '@builder.io/qwik';
import { render } from '@builder.io/qwik';
import { getContainerEl, setupHooks } from '@cypress/mount-utils';

let destroy: (() => void) | undefined;

function cleanup() {
  if (destroy) destroy();
}

export interface MountOptions {
  props?: Record<string, unknown>;
  options?: {
    strict?: boolean;
  };
}

type JSXOutput = JSXNode | string | number | boolean | null | undefined | JSXOutput[];

export function mount(component: JSXOutput | JSXNode[] | FunctionComponent<any>, options?: MountOptions) {
  const root = getContainerEl();

  const renderResultPromise = render(root, component as JSXNode | FunctionComponent<any>);

  Cypress.log({
    name: 'mount',
    message: 'Component',
    consoleProps: () => {
      const comp = component as { props?: unknown } | null | undefined;
      return {
        props: comp?.props,
        description: 'Mounted Qwik component',
        home: 'https://github.com/qwikifiers/cypress-qwik',
      };
    },
  });

  return cy.wrap(renderResultPromise, { log: false }).then((renderResult) => {
    destroy = (renderResult as RenderResult).cleanup;
    return renderResult;
  });
}

setupHooks(cleanup);
