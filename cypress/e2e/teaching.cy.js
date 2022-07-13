
// describe('any title for tests', ()=> {
//     it('Find by ID [#]', () => {
//         cy.visit('http://www.facebook.com')
//         cy.get('#email')
//     })
//
//     it('Find by class [.]', () => {
//         cy.visit('https://next.privat24.ua')
//         cy.get('.wrapper_Y28T956CNF')
//     })
//
//     it('Find by tag', () => {
//         cy.visit('https://djinni.co/jobs/keyword-qa-automation/?page=2')
//         cy.get('nav')
//     })
//
//     it('Find by tag value', () => {
//         cy.visit('http://www.facebook.com')
//         cy.get('[name="pass"]')
//     })
//
//     it('Find by different tag', () => {
//         cy.visit('http://www.facebook.com')
//         cy.get('[data-testid="open-registration-form-button"][role="button"]')
//     })
//
//     it('Find by different types', () => {
//         cy.visit('https://docs.cypress.io/api/table-of-contents')
//         cy.get('button[type="button"][aria-label="Search"]')
//     })
//
//     it('Find by containts name', () => {
//         cy.visit('https://next.privat24.ua/')
//         cy.get('[class^="root_E1PP9VDR8t"]')
//     })

// it('Using Get with FInd and Eq', ()=> {
//     cy.visit('https://next.privat24.ua/deposit/open')
//     cy.get('tbody').find('td').find('div').find('button').eq(0)
// })

it('Using Get with FInd and Eq', ()=> {
    cy.viewport(1800,1200)
    cy.visit('https://docs.cypress.io/guides/overview/why-cypress#What-you-ll-learn')
    cy.get('[class="scrollactive-nav"]').find('li').eq(4).click()
})

it('Using Get with FInd and Eq', ()=> {
    cy.viewport(1800,800)
    cy.visit('https://avto.pro/')
    cy.get('input[name="Login"]').type('yurkagospodarishin@ukr.net')
    cy.get('input[name="Password"]').type('0965854824y')
    cy.get('button[type="submit"]').eq(0).click()
    cy.get('[class="pro-btn pro-btn--prime pro-btn--uppercase pro-btn--framed"]').click()
    cy.get('[class="site-nav__btn site-nav__btn--cart js-cartcount"]').click()

})


// })
