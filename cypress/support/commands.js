// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
Cypress.Commands.add('elementVisible', selector => {
  cy.get(selector).should('be.visible');
});

Cypress.Commands.add('textContain', (selector, value) => {
  cy.get(selector).should('contain', value);
});
