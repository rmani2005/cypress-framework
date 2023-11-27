/// <reference types="cypress" />

// https://on.cypress.io/interacting-with-elements
class ActionsLibrary{
  //Type and Should have.value (paramter1-ObjectName, parameter2-value)
  //'.type() - type into a DOM element'
    ActionsLibrary(){

  }

      /*
      .click()
      .dblclick()
      .rightclick()
      .type()
      .clear()
      .check()
      .uncheck()
      .select()
      .trigger()
      .selectFile()
      */
  getElement(ObjectName){
      return cy.get(ObjectName)
  }

  getElementWithTimeOut(ObjectName, timeoutValue){
    return cy.get(ObjectName, { timeout: timeoutValue })
  }

  isElementDisable(ObjectName){
    cy.get(ObjectName).should('be.disabled').then(function($el){
      return true
    })
  }

  setAlias(ObjectName, aliasName){
    return cy.get(ObjectName).as(aliasName) // sets the alias
  }

  getAlias(ObjectName, aliasName){
    return cy.get('@myElement') // re-queries the DOM as before
  }

  waitForSeconds(waitInMilliSeconds){
    return cy.wait(waitInMilliSeconds)
  }

  typeAndValidate(ObjectName,value){
    return 
     cy.get(ObjectName)
    .type(value).should('have.value', value)   //value='fake@email.com'
  }

  typeAtFirstAndValidate(ObjectName,value){
    return cy
    .get(ObjectName) //'.action-email'
    .first()
    .type(value).should('have.value', value)   //value='fake@email.com'
  }


  typeAndShouldHaveValue(ObjectName,value){
    return cy
    .get(ObjectName) //'.action-email'
    .type(value).should('have.value', value)   //value='fake@email.com'
  }

  //Clear
  // '.clear() - clears an input or textarea element'
  clearTheTextBox(ObjectName){
  // https://on.cypress.io/clear
  return cy.get(ObjectName)
      .clear()
      .should('have.value', '')
  }

  //Clear and Enter
  // '.clear() - clears an input or textarea element'
  clearAndType(ObjectName,value){
    // https://on.cypress.io/clear
    return cy.get(ObjectName)
    .clear()
    .should('have.value', '')
    .type(value)
    .should('have.value', value)
    }


  //Slow Type and Should have.value (paramter1-ObjectName, parameter2-value)
  //'.type() - type into a DOM element'
  SlowtypeAndShouldHaveValue(ObjectName,value){
    return cy
    .get(ObjectName) //'.action-email'
    // Delay each keypress by 0.1 sec
    .type(value, { delay: 100 })
    .should('have.value', value)
 
  }
  
  //'.click() - click on a DOM element', (ObjectName,area)
  clickTheElement(ObjectName){
    // https://on.cypress.io/click
    return cy.get(ObjectName).click()
  }

 //Click the element forcefully
 clickTheElementForce(ObjectName){
      // Ignore error checking prior to clicking
      return cy.get(ObjectName).click({ force: true })
 }

 //Double click
  doubleClick(ObjectName){
    return cy.get(ObjectName).dblclick()
  }

   //Right click
  doubleClick(ObjectName){
    return cy.get(ObjectName).rightclick()
  }

  //'.click() - click on a DOM element', (ObjectName,area)
  clickOnArea(ObjectName,area){
    return cy.get(ObjectName).click(area)
    //cy.get('#action-canvas').click('topLeft').click('top')
    //.click('topRight').click('left').click('right').click('bottomLeft').click('bottom')
    //.click('bottomRight')
    // You can click on 9 specific positions of an element:
    //  -----------------------------------
    // | topLeft        top       topRight |
    // |                                   |
    // |                                   |
    // |                                   |
    // | left          center        right |
    // |                                   |
    // |                                   |
    // |                                   |
    // | bottomLeft   bottom   bottomRight |
    //  -----------------------------------
  }
  //Length of object
  CheckTheLength(ObjectName,Length){
  
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    return cy.get(ObjectName).should('have.length', Length)
}

CheckThecheckBox(ObjectName){

    // https://on.cypress.io/uncheck

    // By default, .uncheck() will uncheck all matching
    // checkbox elements in succession, one after another
    return cy.get(ObjectName)
      //..not('[disabled]')
      .uncheck()
      .check()
      .should('be.checked')
}


CheckThecheckBox(ObjectName){

  // https://on.cypress.io/uncheck
  // .uncheck() accepts a value argument
  return cy.get(ObjectName).then(function(element){
    
      if(element.check('checkbox1')){
        element.uncheck('checkbox1')
        .should('not.be.checked')
      }
    

  })
    
}



  getAttributeValue(ObjectName,attributeName){
    return cy
          .get(ObjectName)

          .then(($myElement) => {
            // ...massage the subject with some arbitrary code

            // grab its href property
            const value = $myElement.prop('attributeName')
            if(attributeName.should('eq','href'))
              return value.replace(/(#.*)/, '')
            else
            // strip out the 'hash' character and everything after it
              return value;
          })
          .then((href) => {
            // href is now the new subject
            // which we can work with now
          })
  }


//Extract the Values
getTheText(objectName){
      
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

dragAndDrop(){
  cy.get('.draggable')
    .trigger('mousedown', { button: 0 })
    .trigger('mousemove', { clientX: 100, clientY: 100 })
    .trigger('mouseup')
}

//expect(Cypress.arch).to.be.oneOf(['x64', 'ia32'])
//if (Cypress.arch === 'x64') {

/*This will be used in the ObjectFind strategy
Is attached
cy.get('button').then(($el) => {
  Cypress.dom.isAttached($el) // true
})

Is descendent
cy.get('div').then(($el) => {
  Cypress.dom.isDescendent($el.parent(), $el) // true
})

Is detached
cy.get('button').then(($el) => {
  Cypress.dom.isDetached($el) // false
})

Is element
cy.get('p').then(($el) => {
  Cypress.dom.isElement($el) // true
})

Is focusable
cy.get('input').then(($el) => {
  Cypress.dom.isFocusable($el) // true
})
Is focused
cy.get('button').then(($el) => {
  Cypress.dom.isFocused($el)
})

Is hidden
cy.get('p').then(($el) => {
Cypress.dom.isHidden($el) // false

Is jQuery
cy.get('input').then(($el) => {
  Cypress.dom.isJquery($el)
})

})
*/
/* This is the actionalble object prereqsite by Cypress
Scroll the element into view.
Ensure the element is not hidden.
Ensure the element is not disabled.
Ensure the element is not detached.
Ensure the element is not readonly.
Ensure the element is not animating.
Ensure the element is not covered.
Scroll the page if still covered by an element with fixed position.
Fire the event at the desired coordinates.
*/

getShadowDomElement(shadowElementName,element){
  return cy.get(shadowElementName).shadow().find(element)
  //return cy.get('#locator').shadow().find('.nb-btn')
}

}module.exports=ActionsLibrary

//Parameter Based Trigger
//npx cypress run --config baseUrl="https://www.lambdatest.com/"

//xpath
//`cy.xpath()` command provided by the `cypress-xpath` plugin to select elements using XPath expressions.



//cy.exec('npm run db:reset && npm run db:seed')
/*cy.exec() - to run system commands
cy.task() - to run code in Node via the setupNodeEvents function
cy.request() - to make HTTP requests
*/