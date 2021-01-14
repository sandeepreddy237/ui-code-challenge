
const getSourceId = () => {
  return "#screen-react-login-email";
};

export class LoginPage {

  setEmail(email) {
    cy.get(`${getSourceId()} input`).eq(0)
      .click()
      .type(email);
  }

  setPassword(password) {
    cy.get(`${getSourceId()} input`).eq(1)
      .click()
      .type(password);
  }

  submitButton() {
    cy.get(`${getSourceId()} [type='submit']`).click();
  }
  clickLoginButton() {
    cy.get(`#screen-react-login .qa-button-show-login-email`).click();
  }
  verifyLoginSuccess() {
    cy.wait(500)
    cy.get(`[data-component="Heading"]`).should('be.visible');
    cy.title().should(
      'equal',
        'Log in success – ABC Account - ABC - Australian Broadcasting Corporation'
    );
  }

  loginWith(email, password) {
    this.clickLoginButton()
    this.setEmail(email);
    this.setPassword(password);
    this.submitButton();
  }
  setValueInTextField(option, index, email) {
    cy.get(`#screen-react-signup-email input`)
        .eq(index)
        .click()
        .type(email);
  }
  submit(option) {
    cy.get(`#screen-react-signup-email`).click();
  }
  checkTickBox(option) {
    cy.get(`#screen-react-signup-email [class='account-checkbox_checkbox-icon']`)
        .click();
  }
  createAccount(email, password, name) {
    let accountType = null
    this.setValueInTextField(accountType, 0, email);
    this.setValueInTextField(accountType, 1, password);
    this.setValueInTextField(accountType, 2, name);
    this.checkTickBox(accountType);
    this.submit(accountType);
  }
}

export const loginPage = new LoginPage();
