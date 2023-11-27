// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.overwrite('screenshot',(originalFn, subject, name, options) => {
      // only take screenshots in headless browser
      if (Cypress.browser.isHeadless) {
        // return the original screenshot function
        return originalFn(subject, name, options)
      }
  
      return cy.log('No screenshot taken when headed')
    }
  )
  
  // only takes in headless browser
  //cy.screenshot()

  Cypress.Commands.add('setSessionStorage', (key, value) => {
    // Turn off logging of the cy.window() to command log
    cy.window({ log: false }).then((window) => {
      window.sessionStorage.setItem(key, value)
    })
  
    const log = Cypress.log({
      name: 'setSessionStorage',
      // shorter name for the Command Log
      displayName: 'setSS',
      message: `${key}, ${value}`,
      consoleProps: () => {
        // return an object which will
        // print to dev tools console on click
        return {
          Key: key,
          Value: value,
          'Session Storage': window.sessionStorage,
        }
      },
    })
  })

const queryName = 'verifyElementActionable'

Cypress.Commands.addQuery(queryName, function (...args) {
  return (subject) => {
    // Verify that the subject fulfills a variety of conditions
    Cypress.ensure.isElement(subject, queryName, cy) 
    Cypress.ensure.isVisible(subject, queryName, cy)
    Cypress.ensure.isNotDisabled(subject, queryName, cy)
    Cypress.ensure.isNotReadonly(subject, queryName, cy)

    return subject
  }
})