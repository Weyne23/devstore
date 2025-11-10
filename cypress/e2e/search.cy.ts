describe('Search products', () => {
  it('should be able to search for a products', () => {
    cy.visit('/')
    //Estou pegando um input com name igual a "q", com o .type eu escrevo
    //o que eu quero dentro dele, depois .parent pego o pai dele mais
    //proximo do tipo form e executo um submit
    cy.searchByQuery('moletom')

    //Aqui quero que minha URL tenha 'include' obrigatoriamente 
    //a palavra '/product'
    //cy.url().should('include', '/search')
    //Faz a mesma coisa do de cima
    cy.location('pathname').should('include', '/search')
    cy.location('search').should('include', 'q=moletom')

    cy.get('a[href^="/product"]').should('exist')
  })
  it('should not be able to visit search page without a search query', () => {
    //Para caso o navegador lance uma exceção o validador ignora-la 
    cy.on('uncaught:exception', () => {
        return false
    })

    cy.visit('/search')

    cy.location('pathname').should('equal', '/')

    cy.get('a[href^="/product"]').should('exist')
  })
})