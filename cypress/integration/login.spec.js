import { loginPage } from '../support/pages/loginPage';

const password = 'Welcome1234!';

context('Login: ', () => {
  describe('Verified', () => {
    it('Verified user should be successfully complete CTV code verification ', () => {
      cy.visit(`${Cypress.env('BASE_URL')}`);
      loginPage.loginWith('verified@gmail.com', 'Welcome1234!');
      loginPage.verifyLoginSuccess();
    });
    it.only('User should able to signup successfully ', () => {
      cy.visit(`${Cypress.env('BASE_URL')}#screen=signup-email`);
      loginPage.createAccount('random123@gmail.com','Welcome1234!', 'random1234')
    });
    });
});
