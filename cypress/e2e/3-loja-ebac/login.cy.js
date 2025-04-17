/// <reference types="cypress"/>

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

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('giovanna.teste@teste.com')
        cy.get('#password').type('teste23')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
        
    });

})