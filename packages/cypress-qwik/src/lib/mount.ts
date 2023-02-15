import { getContainerEl, setupHooks } from '@cypress/mount-utils';

let destroy: () => void | undefined;

function cleanup() {
  if (destroy) destroy();
}

export function mount() {
  const root = getContainerEl();
}

setupHooks(cleanup);
