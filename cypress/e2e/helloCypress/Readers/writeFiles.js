// You can write to a file

// Use a response from a request to automatically
// generate a fixture file for use later
cy.request('https://jsonplaceholder.cypress.io/users')
  .then((response) => {
    cy.writeFile('cypress/fixtures/users.json', response.body)
  })
cy.fixture('users').should((users) => {
  expect(users[0].name).to.exist
})

// JavaScript arrays and objects are stringified
// and formatted into text.
cy.writeFile('cypress/fixtures/profile.json', {
  id: 8739,
  name: 'Jane',
  email: 'jane@example.com',
})

cy.fixture('profile').should((profile) => {
  expect(profile.name).to.eq('Jane')
})