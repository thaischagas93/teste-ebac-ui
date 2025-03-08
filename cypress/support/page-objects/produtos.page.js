class ProdutosPage {
    visitarUrl() {
        cy.visit('produtos')
    }

    buscarProduto(nomeProduto) {
       // cy.get('.category-inside-title')
       cy.get('[name="s"]').eq(1).type(nomeProduto)
       //cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search')
       cy.get('.button-search').eq(1).click()

    }

    buscarProdutoLista(nomeProduto) {
        cy.get('.products > .row')
        .contains(nomeProduto)
        .click()

    }

    visitarProduto() {

    }

    addProdutoCarrinho() {

    }
}

export default new ProdutosPage()