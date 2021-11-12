it('google test', function() {
  cy.visit('https://google.com')

  cy.get('.gLFyf').type('typescript{enter}')
})

