import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given('I open the website', () => {

cy.visit("google.com"); // Replace with your website URL

});


When('I enter my username {string} and password {string}', (username, password) => {
cy.get('input[name="username"]').type(username);
cy.get('input[name="password"]').type(password);

});


And('I click the login button', () => {
cy.get('button[type="submit"]').click();

});


Then('I should be logged in', () => {
cy.url().should('eq', 'https://example.com/dashboard'); // Replace with the expected URL after successful login
cy.contains('Welcome, User!').should('be.visible'); // Replace with an element or text on the dashboard page

});