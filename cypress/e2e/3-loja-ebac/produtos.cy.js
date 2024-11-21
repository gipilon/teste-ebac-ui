//// <reference type ="cypress"/>

describe('Funcionalidade: produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selcionar um produto da lista', () => {
        cy.get('.product-block')
            //.first()
            //.last()
            //.eq(2)
            .contains('Aero Daily Fitness Tee')
            .click()

            cy.get('#tab-title-description > a').should('contain', 'Descrição')

    });
});