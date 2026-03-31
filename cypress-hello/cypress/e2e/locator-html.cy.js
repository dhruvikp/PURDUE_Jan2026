describe('HTML Locator Demo', () => {

    it('Should test all locator types', () => {

        //Steps:

        //1. Visit the webpage
        cy.visit('http://127.0.0.1:5500/public/index.html')


        // 2. ID Locator
        cy.get('#username').type('Dhruvik')

        // 3. Name Locator
        cy.get('[name="password"]').type('password123')

        // 4. Attribute selector
        cy.get('[type="submit"]').click()

        // 5. Link Text Locator
        cy.contains('Forgot Password?').click()

        // 6. Tag locator
        cy.get('input').should('have.length', 3)

        // 7. Custom attribute
        cy.get('[data-cy="email"]').type('dhruvik@example.com')
    })

})
