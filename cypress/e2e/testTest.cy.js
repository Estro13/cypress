describe('Description what we testing', () => {

    it('Search something', ()=> {
        cy.visit('https://www.google.com.ua')
        // cy.get("input[title='Пошук']").type('Youtube').should('have.value', 'Youtube').type('{enter}')
        cy.get("input[title='Пошук']").type('Youtube').should('have.value', 'Youtube')
        cy.contains('Пошук Google').click()
        // cy.contains('https://play.google.com')
        // cy.contains('https://www.ukrinform.ua')
    })

})