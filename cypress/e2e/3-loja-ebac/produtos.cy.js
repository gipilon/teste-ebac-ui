/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro', () => {

    beforeEach (() => {
        cy.visit('produtos')
    });
         
    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
            .contains('Ajax Full-Zip Sweatshirt')
            .click()
        cy.get('#tab-title-description > a').should('exist')
    });

})