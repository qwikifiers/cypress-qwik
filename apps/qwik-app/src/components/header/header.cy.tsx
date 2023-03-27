import { mount } from 'cypress-ct-qwik';
import Header from './header';

describe(`header component test`, () => {
  it('should find a link', () => {
    mount(<Header />);

    cy.contains(/docs/i).should('exist');
  });

  it('should click on a button', () => {
    mount(<Header />);

    cy.contains(/opened/i).should('not.exist');
    cy.contains(/click me/i).click();
    cy.contains(/opened/i).should('exist');
  });
});
