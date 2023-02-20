import type { JSXNode } from '@builder.io/qwik';
import { render } from '@builder.io/qwik';
import { getContainerEl } from '@cypress/mount-utils';

// MIGHT NOT NEED CLEANUP

// let destroy: () => void | undefined;

// function cleanup() {
//   if (destroy) destroy();
// }

export function mount(element: JSXNode) {
  const root = getContainerEl();

  const renderPromise = render(root, element);

  return cy.wrap(renderPromise, { log: false });
}

// MIGHT NOT NEED CLEANUP

// setupHooks(cleanup);
