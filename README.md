<p align="center">
<br/>
  <img width="400" src="./assets/cypress-qwik.png" alt="Qwik loves Cypress">
  <br/>
  <br/>
</p>

<h1 align='center'>Cypress Qwik plugin</h1>

<div align='center'>
  The cypress component testing plugin for <a href='https://github.com/BuilderIO/qwik'>Qwik</a>
  <br><br>

  <a href='https://img.shields.io/npm/v/cypress-ct-qwik?label=npm%20version'>
  <img src='https://img.shields.io/npm/v/cypress-ct-qwik?label=npm%20version' alt='cypress-ct-qwik npm'>
  </a>
  <a href='https://opensource.org/licenses/MIT'>
  <img src='https://img.shields.io/badge/License-MIT-green.svg' alt='MIT'>
  </a>
  <a href='#contributors'>
  <img src='https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square' alt='All Contributors'>
  </a>

</div>
<br>

## Table of Contents

- [Installation](#installation)
- [Configuring Cypress](#configuring-cypress)
- [Usage](#usage)
- [Contributing](#contributing)
- [Code Of Conduct](#code-of-conduct)
- [Contributors](#contributors)
- [Related Links](#related-links)
- [License](#license)

## Installation

```console
npm install -D cypress-ct-qwik
```

## Configuring Cypress

1. Run cypress (in watch mode) after installation

2. Follow the configuration wizard

3. Add `addQwikLoader` to the `cypress/support/component.ts` file -

```ts
// component.ts
import { addQwikLoader } from 'cypress-ct-qwik';
addQwikLoader();

```

Pretty easy... 😊

## Usage

```ts
// some-test.cy.ts

import MyComp from './my-comp';

describe(`Qwik Component Test`, () => {
  it('should find my link', () => {
    cy.mount(<MyComp />);

    cy.contains('myLink').should('exist');
  });
});
```

<br/>

## Contributing

Want to contribute? Yayy! 🎉

Please read and follow our [Contributing Guidelines](CONTRIBUTING.md) to learn what are the right steps to take before contributing your time, effort and code.

Thanks 🙏

<br/>

## Code Of Conduct

Be kind to each other and please read our [code of conduct](CODE_OF_CONDUCT.md).

<br/>

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://hirez.io/?utm_source=github&utm_medium=link&utm_campaign=cypress-qwik"><img src="https://avatars1.githubusercontent.com/u/1430726?v=4?s=100" width="100px;" alt="Shai Reznik"/><br /><sub><b>Shai Reznik</b></sub></a><br /><a href="https://github.com/qwikifiers/cypress-qwik/commits?author=shairez" title="Code">💻</a> <a href="https://github.com/qwikifiers/cypress-qwik/commits?author=shairez" title="Tests">⚠️</a> <a href="#infra-shairez" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/qwikifiers/cypress-qwik/commits?author=shairez" title="Documentation">📖</a> <a href="#maintenance-shairez" title="Maintenance">🚧</a> <a href="https://github.com/qwikifiers/cypress-qwik/pulls?q=is%3Apr+reviewed-by%3Ashairez" title="Reviewed Pull Requests">👀</a> <a href="#ideas-shairez" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jordanpowell88"><img src="https://avatars.githubusercontent.com/u/3605268?v=4?s=100" width="100px;" alt="Jordan Powell"/><br /><sub><b>Jordan Powell</b></sub></a><br /><a href="https://github.com/qwikifiers/cypress-qwik/commits?author=jordanpowell88" title="Code">💻</a> <a href="https://github.com/qwikifiers/cypress-qwik/commits?author=jordanpowell88" title="Tests">⚠️</a> <a href="#infra-jordanpowell88" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/qwikifiers/cypress-qwik/pulls?q=is%3Apr+reviewed-by%3Ajordanpowell88" title="Reviewed Pull Requests">👀</a> <a href="#ideas-jordanpowell88" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-jordanpowell88" title="Maintenance">🚧</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

<br/>

## Related Links

- [Cypress-Qwik Discord](https://discord.gg/PVWUUejrez)
- [Qwik Discord](https://qwik.builder.io/chat)
- [Qwik Docs](https://qwik.builder.io/)
- [Cypress Docs](https://www.cypress.io/)

## License

MIT
