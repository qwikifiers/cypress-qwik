import type { JSXNode } from '@qwik.dev/core';
import { render } from '@qwik.dev/core';
import { getContainerEl, setupHooks } from '@cypress/mount-utils';
import { RenderResult } from '@qwik.dev/core/internal';

let destroy: () => void | undefined;

function cleanup() {
  if (destroy) destroy();
}

export function mount(element: JSXNode) {
  const root = getContainerEl();

  const renderResultPromise = render(root, element);

  Cypress.log({
    name: 'mount',
    message: 'Component',
    consoleProps: () => {
      return {
        // // @ts-ignore protect the use of jsx functional components use ReactNode
        props: element?.props,
        description: 'Mounted Qwik component',
        home: 'https://github.com/qwikifiers/cypress-qwik',
      };
    },
  });

  return cy
    .wrap(renderResultPromise, { log: false })
    .then((renderResult: RenderResult) => {
      destroy = renderResult.cleanup;
      return renderResult;
    });
}

setupHooks(cleanup);
