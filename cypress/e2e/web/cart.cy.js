

describe('testes e2e automationpractice Cart', () => {

    beforeEach(() => {
        if (top.location.protocol == 'https:') {
            top.history.replaceState('', '', top.location.href.replace('https://', 'http://'))
        }
        
        cy.visit('/')
    })

    context('Cart', () => {
        it('Deve validar compras inclusas no carrinho', () => {
            cy.fixture('web/cartData.json').then((cartData) => {
                const product1 = cartData.product1
                const product2 = cartData.product2

                cy.loginToAccount('teste2021@teste.com.br', 'teste')
                cy.addToCart(product1.name)
                cy.addToCart(product2.name)
                cy.viewShoppingCartAndCheckout()
                cy.checkCurrentStepAndProceed('Summary')
                cy.clickCartNavigationButton()
                cy.checkCurrentStepAndProceed('Address')
                cy.clickCartNavigationButton()
                cy.checkCurrentStepAndProceedShipping('Shipping')
                cy.checkCurrentStepAndProceed('Payment')
                cy.checkProductDetailsInCart(product1.name, `SKU : ${product1.sku}`, `Size : ${product1.size}, Color : ${product1.color}`, product1.availability, product1.price, product1.quantity, product1.total)
                cy.checkProductDetailsInCart(product2.name, `SKU : ${product2.sku}`, `Size : ${product2.size}, Color : ${product2.color}`, product2.availability, product2.price, product2.quantity, product2.total)
                cy.checkTotalPrice('$51')
            })
        })
    })
})