import 'cypress-mochawesome-reporter/register';
import addContext from "mochawesome/addContext";

Cypress.on("test:after:run", (test, runnable) => {  
	if (test.state === "failed") {    
		const screenshot ='/screenshots/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed) (attempt 2).png';    
		addContext({ test }, screenshot);  
	}
});