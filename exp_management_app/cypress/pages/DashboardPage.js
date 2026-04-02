class DashboardPage {

  elements = {
    addBtn: () => cy.get('[data-cy="add-expense"]'),
    nameInput: () => cy.get('[data-cy="expense-name"]'),
    amountInput: () => cy.get('[data-cy="expense-amount"]'),
    saveBtn: () => cy.get('[data-cy="save-expense"]'),
    expenseList: () => cy.get('[data-cy="expense-item"]')
  }

  addExpense(name, amount) {
    this.elements.addBtn().click()
    this.elements.nameInput().type(name)
    this.elements.amountInput().type(amount)
    this.elements.saveBtn().click()
  }

  editExpense(name, newAmount) {
    cy.contains(name).parent().find('[data-cy="edit"]').click()
    this.elements.amountInput().clear().type(newAmount)
    this.elements.saveBtn().click()
 }

 deleteExpense(name) {
  cy.contains(name).parent().find('[data-cy="delete"]').click()
}

  verifyExpense(name) {
    cy.contains(name).should('be.visible')
  }

}

export default new DashboardPage()