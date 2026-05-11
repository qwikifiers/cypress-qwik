import { QWIK_LOADER } from '@qwik.dev/core/loader';

export function addQwikLoader() {
  const scriptEl = document.createElement('script');
  const inlineScript = document.createTextNode(QWIK_LOADER);
  scriptEl.appendChild(inlineScript);
  document.body.appendChild(scriptEl);
}
