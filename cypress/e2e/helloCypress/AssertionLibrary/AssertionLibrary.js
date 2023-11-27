/// <reference types="cypress" />

import logger from "../Logger/logger"
//Common class objects
const log=new logger();

class AssertionLibrary{
  //Type and Should have.value (paramter1-ObjectName, parameter2-value)
  //'.type() - type into a DOM element'
  AssertionLibrary(){

  }

    //AssertionLibrabry
    ElementShouldVisible(ObjectName){
      return cy.get(ObjectName).should('be.visible')   
    }

    ElementAtFirstShouldVisible(ObjectName){
      return cy
      .get(ObjectName) //'.action-email'
      .first()
      .should('be.visible')  
    }

    ValidateURLContains(value){
      return cy.url().should("include",value)
    }

    ValidateURLEqual(value){
      return cy.url().should("eq",value)
    }


    ElementContainsValue(ObjectName){
      //Check the object is visible
      ElementShouldVisible(ObjectName)
      return cy.contains(ObjectName).should('be.visible')   
    }

    ElementEqualsValue(ObjectName, value){
      //Check the object is visible
      ElementShouldVisible(ObjectName)
      return cy.get(ObjectName).should('eq',value)   
    }

    ElementHaveValue(ObjectName,value){
      return 
      cy
      .get(ObjectName) //'.action-email'
      .should('have.value', value)   //value='fake@email.com'
    }


    ElementAtFirst(ObjectName,value){
      ElementShouldVisible(ObjectName)
      return cy
      .get(ObjectName) //'.action-email'
      .first()
      .should('have.value', value)   //value='fake@email.com'
    }

    AssertContains(ObjectName,value){
      ElementShouldVisible(ObjectName)
      let val= cy.get(ObjectName).then(function(text){
        
          cy.log("Testing data from fixture - " + val.toString)
          console.log("Testing data from fixture - " + val)
          log.info("Testing data from fixture - " + val.toString)
          log.info("Testing data from fixture - " + val)
      })


  
     /* return cy
      .get(ObjectName) //'.action-email'
      .should('contain.value', value)
      */
    }

    //Write way to extract the value(text) from the tag
    AssertValueContains(objectName,value){
      
      //Method 1 of validating the value
      cy.get(objectName).should('contain.text',value).then(function($el){
        cy.log("Method2 - extracted the value from html tag and checing the expected value is contained -" + $el.text())
      })

      //Wrong way
      //cy.log("Value is - " + cy.get(objectName).text)
     
      //Correct ways
      //Method 2 of validating the value
      return cy.get(objectName).then(($p) => {
        const Actualvalue=$p.text()
        // make sure the extracted text contains some text expected
        //From Chai - expect keyword
        //From JQuery - text() keyword 
        //contain keyword like include in Cypress
        expect(Actualvalue).to.contain(value)
        cy.log("Value expected in UI:" + value + " and Value extracted and Actual in UI:" + Actualvalue)

        // should have found 3 elements
        //expect($p).to.have.length(3)       

      })
    }
 

      //Write way to extract the value(text) from the tag
    AssertValueEqual(objectName,value){
      cy.log("Value is - " +  value)
      //Method 1 of validating the value
      cy.get(objectName).should('have.text',value).then(function($el){
        cy.log("Method2 - extracted the value from html tag and checing the expected value is equal - " + $el.text())
      })

      //Wrong way
      //cy.log("Value is - " + cy.get(objectName).text)

      //Correct ways
      //Method 2 of validating the value
      return cy.get(objectName).then(($p) => {
        const Actualvalue=$p.text()
        // make sure the extracted text contains some text expected
        expect(Actualvalue).to.equal(value)
        cy.log("Value expected in UI:" + value + " and Value extracted and Actual in UI:" + Actualvalue)

        // should have found 3 elements
        //expect($p).to.have.length(3)

        

      })
    }

//Extract the Values
getTheText(objectName){
      
  //Method 1 of validating the value
  cy.get(objectName).should('contain.text',value).then(function($el){
    cy.log("Method2 - extracted the value from html tag and checing the expected value is contained -" + $el.text())
  })

  //Wrong way
  //cy.log("Value is - " + cy.get(objectName).text)
 
  //Correct ways
  //Method 2 of validating the value
  return cy.get(objectName).then(($p) => {
    const Actualvalue=$p.text()
    // make sure the extracted text contains some text expected
    //From Chai - expect keyword
    //From JQuery - text() keyword 
    //contain keyword like include in Cypress
    cy.log("Value extracted and Actual in UI is:" + Actualvalue)
    // should have found 3 elements
    //expect($p).to.have.length(3)       

  })
}

   
}module.exports=AssertionLibrary