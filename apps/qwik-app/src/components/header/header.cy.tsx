import { mount } from 'cypress-qwik';
import Header from './header';

describe(`header component test`, () => {
  it('should find a link', () => {
    mount(<Header />);

    cy.contains(/docs/i).should('exist');
  });
});
