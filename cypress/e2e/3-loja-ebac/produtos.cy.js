/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';
import produtosPage from '../../support/page-objects/produtos.page';

describe('Funcionalidade: Cadastro', () => {

    beforeEach (() => {
        produtosPage.visitarUrl()
    });
         
    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Abominable Hoodie')
        cy.get('.woocommerce-product-details__short-description > p').should('exist')
    });

    it.only('Deve selecionar um produto com sucesso', () => {
        let produto = 'Abominable Hoodie'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a página do produto', () => {
        
    });

    it('Deve adicionar um produto ao carrinho', () => {
        
    });
})