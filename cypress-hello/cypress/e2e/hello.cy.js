describe('Hello Cypress', () => {
  it('Should open website and verify its title', () => {
    cy.visit('https://example.cypress.io') // Adjust the URL as needed
    
    cy.title().should('eq', 'Cypress.io: Kitchen Sink')

  })
})