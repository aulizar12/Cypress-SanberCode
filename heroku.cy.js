const { time } = require("console")

describe('template spec', () => {
  it('passes', () => {
    cy.visit("https://the-internet.herokuapp.com/login")
    cy.wait(2)
    cy.get('#username').type('tomsmith')
    cy.wait(1)
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.radius').click()
    cy.get('#flash').should('be.visible')
    cy.get('.button').click()
    cy.get('#flash').should('be.visible')
  })
})