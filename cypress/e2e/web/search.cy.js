

describe('testes e2e automationpractice Search', () => {

  beforeEach(() => {
    if (top.location.protocol == 'https:') {
      top.history.replaceState('', '', top.location.href.replace('https://', 'http://'))
    }

    cy.visit('/')
  })

  context('Search', () => {
    it('Deve validar a buscar sem informar o produto', () => {
      cy.fixture('web/searchData.json').then((searchData) => {
        cy.search(searchData.emptySearch.keyword)
        cy.checkAlert(searchData.emptySearch.alertMessage)
        cy.checkResultsMessage(searchData.emptySearch.resultsMessage)
      })
    })

    it('Deve validar a buscar informando um produto inexistente', () => {
      cy.fixture('web/searchData.json').then((searchData) => {
        cy.search(searchData.nonExistentProduct.keyword)
        cy.checkSearchAlertMessage(searchData.nonExistentProduct.alertMessage)
        cy.checkResultsMessage(searchData.nonExistentProduct.resultsMessage)
      })
    })

    it('Deve realizar buscar de um produto específico', () => {
      cy.fixture('web/searchData.json').then((searchData) => {
        cy.search(searchData.specificProduct.keyword)
        cy.checkProduct(searchData.specificProduct.expectedProduct)
        cy.checkResultsMessage(searchData.specificProduct.resultsMessage)
      })
    })
  })
})