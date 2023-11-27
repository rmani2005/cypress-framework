/// <reference types="cypress" />

class ConfigProperty{

    constructor(filename){ //filename=projectname
        //this.envPath=envPath
    }

    getAsString(paramterName){
       // return process.env.paramterName;
       //Cypress.config('pageLoadTimeout') // => 60000
       const ConfigValue=Cypress.config(paramterName)
       cy.log("Config Paramter is " +paramterName+ "=" + ConfigValue)
       return ConfigValue
    }

    setConfigValue(paramterName,value){
        // return process.env.paramterName;
        //Cypress.config('pageLoadTimeout') // => 60000
        Cypress.config(paramterName, value)
     }

    getEnvValue(paramterName){
        // return process.env.paramterName;
        //Cypress.config('pageLoadTimeout') // => 60000
        return Cypress.env(paramterName)
        //cy.log("Env Parameter is " +paramterName+ "=" + EnvValue)
       // return EnvValue 
     }

    getAsBoolean(){

        
    }

    getAsInt(){

        
    }


}
module.exports = ConfigProperty