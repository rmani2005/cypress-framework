/// <reference types="cypress" />

//Common Actions 
//Common Assertions
//Page Specific actions
//Page Specific assettion
//Page Specific objects

//Page object Stratergy
//Page wait Stratergy
class BasePage{ 
    
    //Visit 
    visitFromBase(){
        cy.visit("/");
    }
}module.exports=BasePage
