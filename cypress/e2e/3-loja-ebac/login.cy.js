//// <reference type ="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: login',() => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('testador1@gmail.com')
        cy.get('#password').type('ebac123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, testador1 (não é testador1? Sair)')

    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {  
        cy.get('#username').type('testadr1@gmail.com')
        cy.get('#password').type('ebac123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('exist')
    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('testador1@gmail.com')
        cy.get('#password').type('ebc123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('exist')
    })


    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, testador1 (não é testador1? Sair)')

    });

    it.only('Deve fazer login com sucesso - Usando fixture', () => {
        cy.fixture('perfil').then(dados =>{
            cy.get('#username').type(dados.usuario , {log: false})
            cy.get('#password').type(dados.senha , {log: false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, testador1 (não é testador1? Sair)')
        })
    });

})