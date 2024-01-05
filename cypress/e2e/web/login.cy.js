

describe('testes e2e automationpractice Login', () => {

    beforeEach(() => {
        if (top.location.protocol == 'https:') {
            top.history.replaceState('', '', top.location.href.replace('https://', 'http://'))
        }
        
        cy.visit('/index.php?controller=authentication&back=my-account')
    })

    context('Sign In', () => {
        it('Deve realizar login com sucesso', () => {
            cy.fixture('web/credentials.json').then((credentials) => {
                cy.loginToAccount(credentials.validCredentials.email, credentials.validCredentials.password)
            })

            cy.title().should('eq', 'My account - My Shop')
            cy.get('.account > span').should('contain.text', 'Teste automacao')
        })
    })

    context('Sign Out', () => {
        it('Deve deslogar com sucesso', () => {
            cy.fixture('web/credentials.json').then((credentials) => {
                cy.loginToAccount(credentials.validCredentials.email, credentials.validCredentials.password)
            })

            cy.get('.logout').click()

            cy.title().should('eq', 'Login - My Shop')
            cy.get('.login').should('be.visible')
        })
    })

    context('Authentication failed', () => {
        it('Não deve logar com credenciais invalidas', () => {
            cy.fixture('web/credentials.json').then((credentials) => {
                cy.loginToAccount(credentials.invalidEmail.email, credentials.invalidEmail.password)
                cy.checkAlertDanger('Invalid email address.')
            })

            cy.checkAlertDanger('Invalid email address.')
        })

        it('Não deve logar com credencial inexistente', () => {
            cy.fixture('web/credentials.json').then((credentials) => {
                cy.loginToAccount(credentials.nonExistentUser.email, credentials.nonExistentUser.password)
                cy.checkAlertDanger('Authentication failed')
            })

            cy.checkAlertDanger('Authentication failed')
        })

        it('Não deve logar quando email nao for preenchido', () => {
            cy.fixture('web/credentials.json').then((credentials) => {
                cy.loginToAccount(credentials.emptyEmail.email, credentials.emptyEmail.password)
                cy.checkAlertDanger('An email address required.')
            })

            cy.checkAlertDanger('An email address required.')
        })

        it('Não deve logar quando senha nao for preenchido', () => {
            cy.fixture('web/credentials.json').then((credentials) => {
                cy.loginToAccount(credentials.emptyPassword.email, credentials.emptyPassword.password)
                cy.checkAlertDanger('Password is required.')
            })

            cy.checkAlertDanger('Password is required.')
        })
    })
})