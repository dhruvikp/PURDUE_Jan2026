import LoginPage from '../../pages/LoginPage'

describe('Login Test', () => {

  it('should login successfully', () => {

    LoginPage.visit()
    LoginPage.login('admin', '123')

    cy.url().should('include', '/expenses')

  })

  it('should show error for invalid login', () => {

    LoginPage.visit()
    LoginPage.login('wrong', 'wrong')

    LoginPage.elements.errorMsg().should('be.visible')

  })

})