/// <reference types="cypress"/>

const perfil = require('../../fixtures/perfil.json');

describe('Funcionalidade: Login', () => {

    beforeEach (() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    })
         
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('giovanna.teste@teste.com')
        cy.get('#password').type('teste123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, giovanna.teste-4095 (não é giovanna.teste-4095? Sair)')
    });

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('giovnna.teste@teste.com')
        cy.get('#password').type('teste123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
        
    });

    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        
    });

    it('Deve fazer login com sucesso - Usando Fixture', () => {
        cy.fixture('perfil').then( dados => {
            cy.get('#username').type(dados.usuario, {log: false})
            cy.get('#password').type(dados.senha, {log: false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

        })
        
    });

    it('Deve fazer login com sucesso - Usando Comandos customizados', () => {
        cy.login('giovanna.teste@teste.com', 'teste123')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, giovanna.teste-4095 (não é giovanna.teste-4095? Sair)')
    });    
});