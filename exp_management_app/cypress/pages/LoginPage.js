class LoginPage {

  elements = {
    username: () => cy.get('[data-cy="username"]'),
    password: () => cy.get('[data-cy="password"]'),
    loginBtn: () => cy.get('[data-cy="login"]'),
    errorMsg: () => cy.get('[data-cy="error"]')
  }

  visit() {
    cy.visit('/login')
  }

  login(username, password) {
    this.elements.username().type(username)
    this.elements.password().type(password)
    this.elements.loginBtn().click()
  }

}

export default new LoginPage()