//// <reference type ="cypress"/>

describe('Funcionalidade: login',() => {

    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('testador1@gmail.com')
        cy.get('#password').type('ebac123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, testador1 (não é testador1? Sair)')

    })

})