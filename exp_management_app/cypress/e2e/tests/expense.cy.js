import LoginPage from '../../pages/LoginPage'
import DashboardPage from '../../pages/DashboardPage'

describe('Expense Management', () => {

  beforeEach(() => {
    LoginPage.visit()
    LoginPage.login('admin', '123')
    cy.url().should('include', '/expenses')
  })

  it('should add expense', () => {

    DashboardPage.addExpense('Coffee', '100')
    DashboardPage.verifyExpense('Coffee')

  })

  it('should edit expense', () => {

  DashboardPage.addExpense('Tea', '50')
  DashboardPage.editExpense('Tea', '70')

  cy.contains('70').should('be.visible')

})

it('should delete expense', () => {

  DashboardPage.addExpense('Snacks', '200')
  DashboardPage.deleteExpense('Snacks')

  cy.contains('Snacks').should('not.exist')

})

})