

describe('testes e2e automationpractice Products', () => {

    beforeEach(() => {
        if (top.location.protocol == 'https:') {
            top.history.replaceState('', '', top.location.href.replace('https://', 'http://'))
        }
        
        cy.visit('/')
    })

    context('Products', () => {
        it('Deve incluir um produto no carrinho', () => {
            cy.fixture('web/productsData.json').then((productsData) => {
                cy.addToCart(productsData.productToAddToCart)
                cy.checkResultsMessage('Your shopping cart contains:')
                cy.checkProductsQuantity('1 product')
            })
        })
    })
})