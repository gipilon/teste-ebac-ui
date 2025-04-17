/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro', () => {

    beforeEach (() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
         
    it('Deve Completar cadastro com sucesso', () => {
        cy.get('.register > :nth-child(1) > label').type(faker.internet.email())
        cy.get('#reg_password').type('teste123')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.person.firstName())
        cy.get('#account_last_name').type(faker.person.lastName())
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('exist')
    });

    it.only('Deve Completar cadastro com sucesso - Usando variáveis', () => {
        var email = faker.internet.email()
        var nome = faker.person.firstName(nome)
        var sobrenome = faker.person.lastName()

        cy.get('.register > :nth-child(1) > label').type(email)
        cy.get('#reg_password').type('teste123')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('exist')
    });
})