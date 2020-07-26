///< reference types = 'cypress'>

context('Form', () => {
  it('goes to homepage', () => {
    cy.visit('http://localhost:1234/')
  })

  it('goes to form', () => {
    cy.visit('http://localhost:1234/form')
    cy.get('[data-cy=testName]').type('Tiffany Arellano')
    cy.get('[cy=email]').type('email@email.com')

    cy.get('form').submit()
  })
})