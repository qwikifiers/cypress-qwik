import Header from './header';

describe(`header component test`, () => {
  it('should find a link', () => {
    cy.mount(<Header />);

    cy.contains(/docs/i).should('exist');
  });

  it('should click on a button', () => {
    cy.mount(<Header />);

    cy.contains(/opened/i).should('not.exist');
    cy.contains(/click me/i).click();
    cy.contains(/opened/i).should('exist');
  });
});
