import type { JSXNode, RenderResult } from '@builder.io/qwik';
import { render } from '@builder.io/qwik';
import { getContainerEl, setupHooks } from '@cypress/mount-utils';

let destroy: () => void | undefined;

function cleanup() {
  if (destroy) destroy();
}

export function mount(element: JSXNode) {
  const root = getContainerEl();

  const renderResultPromise = render(root, element);

  return cy.wrap(renderResultPromise, { log: false }).then((renderResult) => {
    destroy = (renderResult as RenderResult).cleanup;
    return renderResult;
  });
}

setupHooks(cleanup);
