import addContext from "mochawesome/addContext";

const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = (on, config) => {
    on('file:preprocessor', cucumber());
    require('cypress-mochawesome-reporter/plugin')(on);
};

Cypress.on("test:after:run", (test, runnable) => {  
	if (test.state === "failed") {    
		const screenshot ='/screenshots/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed) (attempt 2).png';    
		addContext({ test }, screenshot);  
	}
});