
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

// it('Using Get with FInd and Eq', ()=> {
//     cy.viewport(1800,1200)
//     cy.visit('https://docs.cypress.io/guides/overview/why-cypress#What-you-ll-learn')
//     cy.get('[class="scrollactive-nav"]').find('li').eq(4).click()
// })


// Приклад реєстрації
// it('Using Get with FInd and Eq', ()=> {
//     cy.viewport(1800,800)
//     cy.visit('https://avto.pro/')
//     cy.get('input[name="Login"]').type('yurkagospodarishin@ukr.net')
//     cy.get('input[name="Password"]').type('0965854824y')
//     cy.get('button[type="submit"]').eq(0).click()
//     cy.get('[class="pro-btn pro-btn--prime pro-btn--uppercase pro-btn--framed"]').click()
//     cy.get('[class="site-nav__btn site-nav__btn--cart js-cartcount"]').click()
//
// })


// conatains завжди шукає по приорітету button input a label навіть якщо наший текс вкладений в дівах
// it('Using contains', ()=> {
//     cy.visit('https://next.privat24.ua/mobile')
//     cy.contains('Вхід')
// })

// Пошук кокретного діва з текстом
// it('Using contains', ()=> {
//     cy.visit('https://next.privat24.ua/mobile')
//     cy.contains('div', 'вхід')
// })

// Пошук тексту незважаючи на регістр
// it('Using contains', ()=> {
//     cy.visit('https://next.privat24.ua/mobile')
//     cy.contains('ВХІД', {matchCase: false})
// })


// it('Using contains', ()=> {
//     cy.visit('https://next.privat24.ua/mobile')
//     cy.get('footer').contains('API')
// })

// it('SHOULD', ()=> {
//     cy.visit('https://next.privat24.ua/mobile')
//     cy.get('[data-qa-node="amount"]')
//         .type(100)
//         .should('have.value', 100)
//         .and('be.visible')
// })

// it('EXCEPT', ()=> {
//     cy.visit('https://next.privat24.ua/mobile')
//     cy.get('[data-qa-node="amount"]')
//         .type(100).then(input => {
//             expect(input).to.have.value(100)
//     })
// })
//
// it('check default value for deposite', ()=> {
//     cy.visit('https://next.privat24.ua/deposit/open')
//     cy.get('[data-qa-value="Гривня"]')
//         .should('be.checked')
// })

// it('check hover', ()=>{
//     cy.visit('https://next.privat24.ua/deposit/open')
//     cy.contains('Мої депозити')
//         .trigger('mouseover')
//         .get('#archiveDeposits')
//         .should('be.visible')
// })

// it('Check that button have atribue button', ()=> {
//     cy.visit('https://next.privat24.ua')
//     cy.contains('Переглянути картки')
//         .should('have.attr', 'type')
//         .and('match', /button/)
// })
//
// it('Check if correct URL', ()=> {
//     cy.visit('https://next.privat24.ua')
//     cy.url()
//         .should('eq', '//next.privat24.ua')
// })

// })

//ACTION ON WEB ELEMENTS

// it('Type text or numbers in input', ()=> {
//     cy.visit('https://next.privat24.ua/mobile')
//     cy.get('[data-qa-node="amount"]')
//         .type(333)
// })

// it('Focus(click and cursos) on input', ()=> {
//     cy.visit('https://next.privat24.ua/mobile')
//     cy.get('[data-qa-node="amount"]')
//         .focus()
// })

// it('Blur', ()=> {
//     cy.visit('https://next.privat24.ua/mobile')
//     cy.get('[data-qa-node="amount"]')
//         .focus()
//         .blur()
// })

// it('Clear', ()=> {
//     cy.visit('https://next.privat24.ua/mobile')
//     cy.get('[data-qa-node="amount"]')
//         .type(333)
//         .wait(3000)
//         .clear()
// })

// it('Submit(check all fields in form which empty(required field) or bad validation)', ()=> {
//     cy.visit('https://next.privat24.ua/mobile')
//     cy.get('form[method="post"]')
//         .submit()
// })

// it('Check wait and uncheck checkbox', ()=> {
//     cy.visit('https://en.privatbank.ua/')
//     cy.get('#switch-input')
//         .check({force: true})
//         .wait(3000)
//         .uncheck({force: true})
// })

// it('Rightclick', ()=> {
//     cy.visit('https://next.privat24.ua/mobile')
//     cy.get('[data-qa-value="manual"]')
//         .rightclick()
// })

// it('Check wait and uncheck checkbox', ()=> {
//     cy.visit('https://avto.pro/')
//     cy.get('[class="pro-select__toggle pro-select__toggle--normal"]')
//         .eq(1)
//         .click()
//         .get('[data-label="UA"]')
//         .click()
// })

// it('ScrollIntoView', ()=> {
//     cy.visit('https://next.privat24.ua/mobile')
//     cy.get('[class="sc-eTuwsz dQsUjc"]')
//         .wait(3000)
//         .scrollIntoView()
//         .click({force: true})
// })
// it('Scroll TO', ()=> {
//     cy.visit('https://next.privat24.ua/mobile')
//         .wait(3000)
//         .scrollTo(0,100000)
// })

// it('Trigger', ()=> {
//     cy.visit('https://next.privat24.ua/mobile')
//         .get('[class="label_i9jpKlTKcT selection_fK7AVaRhis selected_TIuX5Orjhk"]')
//         .wait(3333)
//         .trigger('mouseover')
// })


