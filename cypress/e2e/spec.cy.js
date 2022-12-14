describe('empty spec', () => {
  it('test1', () => {
    cy.visit('http://localhost:3002/')
    cy.get("#1").contains('%').should('have.value', '%').click()
    cy.get('input[type="text"]').should('have.value', '%')


    cy.get('#4').click()
    cy.get('input[type="text"]').should('have.value', '')
  })
})