import { render } from '@qwik.dev/core';
import { getContainerEl, setupHooks } from '@cypress/mount-utils';
import { RenderResult } from '@qwik.dev/core/internal';

let destroyVNodes: (() => void) | undefined;

// Tears down whatever the previous mount() left behind. Safe to call when nothing is mounted.
//
// Why we run this on every mount() instead of only between tests:
//   - Qwik V1's render() tolerated being called twice on the same parent (just diffed).
//     Qwik V2 throws Q4 (`cannotRenderOverExistingContainer`) if `q:container` is still set,
//     and reuses a cached DomContainer hanging off `parent.qContainer` even after we strip
//     the attribute — so the second render renders into the previous test's vnode tree.
//   - `setupHooks` only fires between tests (test:before:after:run:async). It does nothing
//     for `cy.mount()` called twice within the same test (e.g. once in beforeEach and once
//     in the it block) — a pattern that worked in V1.
function teardown() {
  if (destroyVNodes) {
    // Tear down reactive state: useTask$ cleanups, signal/store effects, vnode tree.
    destroyVNodes();
    destroyVNodes = undefined;
  }
  const root = getContainerEl() as HTMLElement & { qDestroy?: () => void };
  // Release the container itself: removes `q:container`, clears cached DomContainer on
  // `root.qContainer`, neutralizes lookups. `qDestroy` is set on the element by
  // DomContainer's constructor and proxies to `$destroy$()`.
  if (typeof root.qDestroy === 'function') {
    root.qDestroy();
  }
  // Clear DOM children left behind by the previous render.
  root.innerHTML = '';
}

export function mount(element: any) {
  // Always tear down before mounting. Handles both same-test re-mounts and test-to-test transitions.
  teardown();
  const root = getContainerEl();
  const renderResultPromise = render(root, element);
  Cypress.log({
    name: 'mount',
    message: 'Component',
    consoleProps: () => {
      return {
        props: element === null || element === void 0 ? void 0 : element.props,
        description: 'Mounted Qwik component',
        home: 'https://github.com/qwikifiers/cypress-qwik',
      };
    },
  });
  return cy
    .wrap(renderResultPromise, { log: false })
    .then((renderResult: unknown) => {
      destroyVNodes = (renderResult as RenderResult).cleanup;
      return renderResult;
    });
}

// Belt-and-suspenders: also clean up between tests so the very last test's state doesn't leak
// (matters for dev-mode HMR and Cypress's snapshot panel).
setupHooks(teardown);
//# sourceMappingURL=mount.js.map
