/// <recerence types ="cypress"/>

describe('funcionalidade: login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot();
    });
    
    
    
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('testador1@gmail.com')
        cy.get('#password').type('ebac123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, testador1gipilongipilongipilongipilon (não é testador1gipilongipilongipilongipilon? Sair)')
    });

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('tesador1@gmail.com')
        cy.get('#password').type('ebac123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido.')
    });

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('testador1@gmail.com')
        cy.get('#password').type('ebac23')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('exist')
    });
});