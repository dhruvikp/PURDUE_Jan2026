describe('Hello Cypress', () => {
  
  beforeEach(() => {
    // This will run before each test in this block
    cy.log('Running before each test')
  })

  before(() => {
    // This will run once before all tests in this block
    cy.log('Running before all tests')
  })

  afterEach(() => {
    // This will run after each test in this block
    cy.log('Running after each test')
  })

  after(() => {
    // This will run once after all tests in this block
    cy.log('Running after all tests')
  })
  
  
  it('Should open website and verify its title', () => {
    cy.visit('https://example.cypress.io') // Adjust the URL as needed
    
    cy.title().should('eq', 'Cypress.io: Kitchen Sink')
  })

   it('Should open website and verify its title1', () => {
    cy.visit('https://example.cypress.io') // Adjust the URL as needed
    
    cy.title().should('eq', 'Cypress.io: Kitchen Sink')
  })
})