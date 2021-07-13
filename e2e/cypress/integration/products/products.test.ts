/// <reference types="Cypress" />

context('HomePage should', () => {
  beforeEach(() => {
    cy.visit(Cypress.env().baseUrl);
  });

  it('Displays products first page as homepage', () => {
    cy.url().should('include', '/page/1');
  });

  it('Should load products', () => {
    cy.get(".product").should("have.length", 8)
  })

  it('Is able to filter products by activity', () => {
    cy.get("[data-cy=active-filter-label]").click();
    cy.get('#active-filter').should('be.checked');

    cy.get(".products__container").contains('button', 'Unavailable').should('not.exist')
  })

  it('Is able to filter products by promo', () => {
    cy.get("[data-cy=promo-filter-label]").click();
    cy.get('#promo-filter').should('be.checked');

    cy.get(".product__img").not('.product__label').should('exist');
  })

  it('Is able to search specific phrases', () => {
    cy.get('#search').type('Chicken')
    cy.wait(5000);
    cy.get('.product__title').filter(':contains("Chicken")').should('have.length', '8');
  })
});
