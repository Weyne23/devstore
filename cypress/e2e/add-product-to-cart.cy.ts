describe('add product to cart', () => {
  it('shoud be able to navigate to the product page and add it to the cart', () => {
    cy.visit('http://localhost:3000')

    //get pega o elemento da tela, estilo querySelector, onde pesquiso
    //por um link(a) onde href dele possui um caminho com "/product",
    //pega o priemiro que achar e da um click 
    cy.get('a[href^="/product"]').first().click()

    //Aqui quero que minha URL tenha 'include' obrigatoriamente 
    //a palavra '/product'
    cy.url().should('include', '/product')

    //Busca um elemento com o nome "Adicionar ao carrinho" e clica nele 
    cy.contains('Adicionar no carrinho', { matchCase: false }).click()
  
    cy.contains('Cart (1)').should('exist')
  }),
  it('should not count duplicated products on cart', () => {
    cy.visit('http://localhost:3000')

    //get pega o elemento da tela, estilo querySelector, onde pesquiso
    //por um link(a) onde href dele possui um caminho com "/product",
    //pega o priemiro que achar e da um click 
    cy.get('a[href^="/product"]').first().click()

    //Aqui quero que minha URL tenha 'include' obrigatoriamente 
    //a palavra '/product'
    cy.url().should('include', '/product')

    //Busca um elemento com o nome "Adicionar ao carrinho" e clica nele 
    cy.contains('Adicionar no carrinho', { matchCase: false }).click()
    cy.contains('Adicionar no carrinho', { matchCase: false }).click()
  
    cy.contains('Cart (1)').should('exist')
  })
  it('shoud be able to search for a product and add it to the cart', () => {
    cy.visit('http://localhost:3000')

    //Estou pegando um input com name igual a "q", com o .type eu escrevo
    //o que eu quero dentro dele, depois .parent pego o pai dele mais
    //proximo do tipo form e executo um submit
    cy.get('input[name=q]').type('moletom').parent('form').submit()

    //get pega o elemento da tela, estilo querySelector, onde pesquiso
    //por um link(a) onde href dele possui um caminho com "/product",
    //pega o priemiro que achar e da um click 
    cy.get('a[href^="/product"]').first().click()

    //Aqui quero que minha URL tenha 'include' obrigatoriamente 
    //a palavra '/product'
    cy.url().should('include', '/product')

    //Busca um elemento com o nome "Adicionar ao carrinho" e clica nele 
    cy.contains('Adicionar no carrinho', { matchCase: false }).click()
  
    cy.contains('Cart (1)').should('exist')
  })
})