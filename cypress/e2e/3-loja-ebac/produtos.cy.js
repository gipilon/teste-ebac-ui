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

    it('Deve selecionar um produto com sucesso', () => {
        let produto = 'Abominable Hoodie'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('abominable-hoodie')
    });

    it.only('Deve adicionar um produto ao carrinho', () => {
            cy.fixture('produtos').then((dados) => {
                produtosPage.buscarProduto(dados[1].nomeProduto)
                produtosPage.adicionarProdutoCarrinho(dados[1].tamanho, dados[1].cor, dados[1].quantidade)
        
                cy.get('.woocommerce-message').should('exist')
        });
    });    
})