/// <reference types="cypress" />

class BrowserService{

    constructor(){ //filename=projectname
        //this.envPath=envPath
    }

    navigate(){
        return cy.visit(baseUrl);
    }

    navigateTo(url){
       return cy.visit(url);
    }

    clearCookies(){
         
        //cy.getCookies().should('have.length.greaterThan', 0)
        cy.clearCookies()
        return cy.getCookies().should('be.empty')
    }

    //validate the url
    ValueEqualsInURL(text){
        return cy.url().should('eq', 'login')
        //cy.url().should('eq', 'https://example.com/dashboard');
    }
    //validate the url
    ValueContainsInURL(text){
        return cy.url().should('include', 'login')
    }

     //validate the url
     ValueNotContainsInURL(text){
        return cy.url().should('not.contain.value', 'login')
    }


    //Navigation Services
    getCookiesValue(cookieName){
        return cy.getCookies(cookieName)
    }
    
    setCookiesValue(cookieName){
        return cy.setCookie(cookieName)
    }

    setSession(){

    }
  
    openInSameWindow(Objectname){
        return cy
              .get(ObjectName)
    
              .then(($myElement) => {
                // ...massage the subject with some arbitrary code
    
                // grab its href property
                const href = $myElement.prop('href')
              })
              .then((href) => {
                // href is now the new subject
                // which we can work with now
                return cy.get(href)
              })
      }
        
    //Invoke to remove the tag attributes with help of JQuery
    openNewWindowinSameWindow(element){
        return cy.get(element).invoke('removeAttr', 'target').click()
        //cy.get('a[href*="lambdatest"]').invoke('removeAttr', 'target').click()
    }
    //Clear Cookies
    //Clear Alerts
    //Set browser related stuffs

    //it('example', () => {
    //expect(Cypress.currentRetry).to.eq(0) })

}module.exports=BrowserService