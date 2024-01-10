
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

Cypress.Commands.add('checkTotalPrice', (expectedPrice) => {
    cy.get('#total_price_container').should('contain.text', expectedPrice)
})

Cypress.Commands.add('loginToAccount', (email, password) => {
    cy.get('.login').click()
    cy.get('#email').type(email)
    cy.get('#passwd').type(password)
    cy.get('#SubmitLogin > span').click()
})

Cypress.Commands.add('search', (item) => {
    if (item) {
        cy.get('input[placeholder=Search]').type(item)
    }
    cy.get('#searchbox > .btn').click()
})

Cypress.Commands.add('checkResultsMessage', (mensagem) => {
    cy.get('.heading-counter').should('contain.text', mensagem)
})

Cypress.Commands.add('checkAlertDanger', (alert) => {
    cy.get('.alert.alert-danger').should('contain.text', alert)
})

Cypress.Commands.add('checkProductsQuantity', (qtd) => {
    cy.get('span #summary_products_quantity').should('contain.text', qtd)

})

Cypress.Commands.add('checkProduct', (productName) => {
    cy.get('.lighter').should('contain.text', productName)
})

Cypress.Commands.add('checkAlert', (texto) => {
    cy.get('.alert').should('contain.text', texto)
})

Cypress.Commands.add('checkSearchAlertMessage', (expectedMessage) => {
    cy.get('.alert.alert-warning').invoke('text').then((text) => {
        const cleanedText = text.replace(/\s+/g, ' ').trim()
        const expectedCleanedMessage = expectedMessage.replace(/\s+/g, ' ').trim()
        expect(cleanedText).to.equal(expectedCleanedMessage)
    })
})

Cypress.Commands.add('addToCart', (productName) => {
    cy.get('input[placeholder=Search]').type(productName)
    cy.get('#searchbox > .btn').click()
    cy.get('.lighter').should('contain.text', productName)
    cy.get('.ajax_add_to_cart_button > span').click()
    cy.get('h2').should('contain.text', 'Product successfully added to your shopping cart')
    cy.get('.layer_cart_cart > .button-container').click()
    cy.get('#cart_title').should('contain.text', 'Shopping-cart summary')

})

Cypress.Commands.add('viewShoppingCartAndCheckout', () => {
    cy.get('[title="View my shopping cart"]').should('be.visible').trigger('mouseover')
    cy.contains('span', 'Check out').click()
})

Cypress.Commands.add('checkCurrentStepAndProceed', (stepName) => {
    cy.get('.step_current > span').should('contain.text', stepName)
})

Cypress.Commands.add('checkCurrentStepAndProceedShipping', (stepName) => {
    cy.get('.step_current > span').should('contain.text', stepName)
    cy.get('#cgv').click({ force: true }).then(() => {
        cy.wait(1000)
        cy.clickCartNavigationButton()

    })
})

Cypress.Commands.add('checkProductDetailsInCart', (productName, sku, sizeColor, stockLabel, price, quantity, total) => {
    cy.get('.cart_description > .product-name > a').should('contain.text', productName)
    cy.get('.cart_ref').should('contain.text', sku)
    cy.get('.cart_description small a').should('contain.text', sizeColor)
    cy.get('.cart_avail > .label').should('contain.text', stockLabel)
    cy.get('.price').should('contain.text', price)
    cy.get('.cart_quantity').should('contain.text', quantity)
    cy.get('.cart_total').should('contain.text', total)
})

Cypress.Commands.add('clickCartNavigationButton', () => {
    cy.get('.cart_navigation > .button > span').click()
})

Cypress.Commands.add('GET', (url) => {
    // const base= "https://api.trello.com/1"

    cy.api(Cypress.env('apiUrl') + url).then((response) => {
        return response
    })
    
})