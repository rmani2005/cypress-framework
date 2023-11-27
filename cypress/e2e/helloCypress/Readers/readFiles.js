cy.readFile('cypress.config.js').then((json) => {
    expect(json).to.be.an('object')
  })