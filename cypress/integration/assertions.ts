it('learning assertions', function () {
  cy.visit('https://example.cypress.io/');
  cy.contains('get').click();
  cy.get('#query-btn').should('contain', 'Button').should('be.enabled');
  cy.get('#query-btn').invoke('attr', 'id')
  expect(true).to.be.true

  let name = 'Tom'

  expect(name).to.be.equal('Tom')
});
