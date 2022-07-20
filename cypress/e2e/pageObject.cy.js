import {mobileReplenishments} from "../support/pages/mobileReplenishments";

beforeEach('setup success response with stub', () => {
    const test = {
        "task_id": "cache",
        "data": {
            "channel": "",
            "confirm_error_code": "free",
            "dialogs": {},
            "payments": [
                {
                    "aCard": "5168757414680050",
                    "amount": "1.00",
                    "bName": "Kyivstar Ukraine",
                    "currency": "UAH",
                    "description": "Поповнення телефону. На номер +380965854824",
                    "link": "mobipay",
                    "ref": "P24A67793346D801869"
                }
            ],
            "result": "accept",
            "timestamp": "1658263981540"
        },
        "ref": "payments_a5394b80f40dd0b5cf680750ace2b09520770ee6",
        "status": "success"
    }
    // cy.intercept('https://next.privat24.ua/api/p24/pub/confirm/check?',
    //     {fixture: 'confirmResponse/success.json'})
    cy.intercept('https://next.privat24.ua/api/p24/pub/confirm/check?', (req) => {
        req.continue(res => {
            res.body = test
        })
    })
})


it.only('Replenishment of Ukraine mobile phone number', () => {
    cy.visit('https://next.privat24.ua/mobile')


    mobileReplenishments.typePhoneNumber('965854824')
    mobileReplenishments.typeAmount('1')

    mobileReplenishments.typeDebitCardData('4552331448138217', '0524', '111')


    cy.get('[data-qa-node="firstNamedebitSource"]')
        .type('Yura')
        .get('[data-qa-node="lastNamedebitSource"]')
        .type('Gospodarishin')

        .wait(1000)

    mobileReplenishments.submitPayment()

    cy.get('[data-qa-node="card"]')
        .should('have.text', '4552 **** **** 8217')

        .get('[data-qa-node="details"]')
        .should('have.text', 'Поповнення телефону. На номер +380965854824')

        .get('[data-qa-node="amount"]')
        .should('contain.text', '1')

        .get('[data-qa-node="commission"]')
        .eq(1)
        .should('have.text', '2')

    cy.contains('Сплатити')
        .click()

})


it('Money transfer beetwen foreign cards', () => {
    cy.visit('https://next.privat24.ua/money-transfer/card')
        .get('[data-qa-node="numberdebitSource"]')
        .type('5168757414680050')
        .get('[data-qa-node="expiredebitSource"]')
        .type('0624')
        .get('[data-qa-node="cvvdebitSource"]')
        .type('015')
        .get('[data-qa-node="numberreceiver"]')
        .type('4149439319874065')
        .get('[data-qa-node="amount"]')
        .type('13')
        .get('[type="submit"]')
        .wait(2000)
        .click()

})


it('Example sending the GET request', () => {
    cy.request('https://next.privat24.ua/')
        .then((response) => {
            console.log(response)
        })
})

it('Example sending Post request with expect verification of response', () => {
    const requestBody = {
        "action": "info",
        "phone": "+380965854824",
        "amount": 1,
        "currency": "UAH",
        "cardCvv": "596",
        "card": "5375414103398854",
        "cardExp": "0724",
        "xref": "384d94a4ff6e0d6b1896b75523f6508b",
        "_": 1658151672758
    }

    const requestHeaders = {
        cookie: '_ga=GA1.2.32111721.1657291555; theme=light; _gid=GA1.2.1663303637.1658128339; pubkey=ea521619c1d1e5e9a43db751e6081617; _gat_gtag_UA_29683426_11=1; fp=61; lfp=7/8/2022, 5:46:05 PM; pa=1657970866354.06180.44636964806377377next.privat24.ua0.8564621986995236+7'

    }

    cy.request({
        method: 'POST',
        url: 'https://next.privat24.ua/api/p24/pub/mobipay',
        body: requestBody,
        headers: requestHeaders
    })
        .then((response) => {
            expect(response).to.have.property('status').to.eq(200)
            expect(response.body).to.have.property('status').to.equal('success')
            expect(response.body.data).to.have.property('amount').to.eq('1.0')
            console.log(response)
        })
})


it('Example sending Post request with should verification of response', () => {
    const requestBody = {
        "action": "info",
        "phone": "+380965854824",
        "amount": 1,
        "currency": "UAH",
        "cardCvv": "596",
        "card": "5375414103398854",
        "cardExp": "0724",
        xref: "9dda3974583f58b0e48c73af0f18da98",
        "_": 1658151672758
    }

    const requestHeaders = {
        cookie: '_ga=GA1.2.32111721.1657291555; theme=light; _gid=GA1.2.1663303637.1658128339; pubkey=758d29773b91016e347421bc77b18d04; _gat_gtag_UA_29683426_11=1; fp=67; lfp=7/8/2022, 5:46:05 PM; pa=1657970866354.06180.44636964806377377next.privat24.ua0.8564621986995236+12'

    }

    cy.request({
        method: 'POST',
        url: 'https://next.privat24.ua/api/p24/pub/mobipay',
        body: requestBody,
        headers: requestHeaders
    }).its('body').should('contain', {
        status: 'success'
    }).its('data').should('contain', {
        commission: '2.0'
    })
})