const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;


//Why is it Cypress.config and not cy.config?
//As a rule of thumb anything you call from Cypress affects global state. Anything you call from cy affects local state.

//Cy or Cypress is called Chainable( Cypress.Chainable<any>) means, the commans which will be passed to this object is chain form its performed as action

module.exports = defineConfig({
  
  projectId:"ncf84v",
  //End-to-end folder config
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //BBD-Cucumber
      //return require('./cypress/plugins/index.js')(on, config)
    },
    // Command timeout overridden for E2E tests
    defaultCommandTimeout: 10000,
    //urls:
    baseUrl: "https://manikandanravi.in",
    
    //BDD
   //specPattern: 'cypress/e2e/helloCypress/BDD/**/*.feature',
   //supportFile:false

  },//E2E ends here
 
  "cypress-cucumber-preprocessor":{
      nonGlobalStepDefinitions: false,
      step_definitions: './cypress/e2e/helloCypress/BDD/StepDef/*'
    },
  //Retry
  retries: {
      // Configure retry attempts for `cypress run`
      // Default is 0
      runMode: 2,
      // Configure retry attempts for `cypress open`
      // Default is 0
      openMode: 0
   },
  env:{
    baseUrl:"https://manikandanravi.in",
    url_goggle:"www.google.com",
    url_yahoo:"www.yahoo.com",
    url_bing:"www.bing.com"
  },
  //Reporters
  reporter:"mochawesome",
  //reporter: "cypress-mochawesome-reporter",
  //reporterEnabled: "spec, json, html",
  //"reporter":"reporters/custom.js",

  reporterOptions: {
    reportTitle: 'My Hello Cypress Test Report',
    mochaFile: "cypress/results/cypress-output.[hash].xml",
    reportFilename: "[status]_[datetime]-[name]-report",
    timestamp: "longDate",
    reportDir: 'cypress/results',
    overwrite: false,
    html: true,
    json: true,
    charts:true,
    code:true,
    autoOpen:false,
    showHooks:true,
    reportPageTitle: "My Bio Site Test Suite",
    embeddedScreenshots: true,
    inlineAssets: true
  },
  video: false,
  screenshotsFolder: "./cypress/results/",
  //
  chromeWebSecurity:false,
  //Timeouts:
  execTimeout:10000,

  defaultCommandTimeout: 5000,
  viewportWidth: 1000,
  viewportHeight: 600,

  // Viewport settings overridden for component tests
  component: {
    viewportWidth: 500,
    viewportHeight: 500,
  },

  //Folder Strcutures
  fixturesFolder:"cypress/e2e/helloCypress/fixtures",
  ExampleFolder:"",
  FixtureFolder:"",
  screenshotsFolder1:"",
  supportFolder1:"",
  MasterFolder:"",
  LoggerFolder:"",
  ReporterFolder:"",
  BrowserManager:"",
  ActionLibrary:"",
  AssertionLibrary:"",
  
  TestFolder:"",
  PageFolder:"",

  APIFolder:"",
  BDDFolder:"",
    
  //fixturesFolder:
  //projectId: null,
  //responseTimeout:,

});
