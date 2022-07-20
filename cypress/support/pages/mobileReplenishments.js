export class MobileReplenishments {

    typePhoneNumber(phoneNumber) {
    cy.get('[data-qa-node="phone-number"]')
            .type(phoneNumber)
    }

    typeAmount(amount){
        cy.get('[data-qa-node="amount"]')
            .type(amount)
    }

    typeDebitCardData(cardNumber, exDate, cvv) {
        cy.get('[data-qa-node="numberdebitSource"]')
            .type(cardNumber)
            .get('[data-qa-node="expiredebitSource"]')
            .type(exDate)
            .get('[data-qa-node="cvvdebitSource"]')
            .type(cvv)
    }

    submitPayment(){
    cy.get('[data-qa-node="submit"]')
            .click()
    }
}

export const mobileReplenishments = new MobileReplenishments();