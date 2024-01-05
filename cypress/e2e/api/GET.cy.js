

describe('Validação da resposta da API Trello', () => {
    it('Deve validar o conteúdo da chave "list"', () => {
        cy.fixture('api/trelloApiResponse.json').then((trelloApiResponse) => {
            cy.GET('/actions/592f11060f95a3d3d46a987a')
                .then((response) => {
                    expect(response.status).to.equal(trelloApiResponse.status)
                    expect(response.body.data.list.name).to.equal(trelloApiResponse.name)
                })
        })
    })
})