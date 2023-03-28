import { defineComponentFramework } from 'cypress';

const qwik: Cypress.CypressComponentDependency = {
  type: 'cypress-ct-qwik',
  name: 'Qwik',
  package: '@builder.io/qwik',
  installer: '@builder.io/qwik',
  description: 'The HTML-first framework',
  minVersion: '^0.19.2',
};

const qwikCity: Cypress.CypressComponentDependency = {
  type: 'cypress-ct-qwik',
  name: 'Qwik City',
  package: '@builder.io/qwik-city',
  installer: '@builder.io/qwik-city',
  description: 'The meta-framework for Qwik',
  minVersion: '^0.4.0',
};

export default defineComponentFramework({
  /**
   * This should match the `npm` package name.
   * The convention required to ensure your Definition is processed
   * by Cypress is `cypress-ct-*` for global packages, or
   * `@org/cypress-ct-*` for organization level packages.
   */
  type: 'cypress-ct-qwik',

  /**
   * The label that shows up when configuring Component Testing
   * for the first time.
   */
  name: 'Qwik',

  /**
   * Supported bundlers. Can be "webpack" and/or "vite".
   */
  supportedBundlers: ['vite'],

  /**
   * Used by Cypress to automatically detect the correct Framework Definition
   * based on the user's project.
   * In this example, if a module matching `solidDep`
   * is found in the user's project,
   * Solid.js will automatically be selected when configuring Component Testing.
   */
  detectors: [qwik],

  /**
   * Optionally, some conditional logic, based on whether
   * the user selected Vite or webpack.
   */
  dependencies: (bundler) => {
    return [qwik, qwikCity];
  },
});
