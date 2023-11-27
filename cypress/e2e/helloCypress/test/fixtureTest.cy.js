import Home from "../Page/Home"
import ActionsLibrary from "../ActionsLibrary/ActionsLibrary"
import ConfigProperty from "../Config/ConfigProperty"
import logger from "../Logger/logger"
import BrowserService from "../BrowserManager/BrowserService"

//Common class objects
const log=new logger();
const action=new ActionsLibrary();
const prop=new ConfigProperty();
const Browser=new BrowserService();

//Pages
const home=new Home();

//Objects
const urlVariable="url_goggle"

//Loading the Browser relarted paramters
//What Browser
//const example=""
describe("Testing the Home page",{ browser: 'chrome' }, ()=>{

    let userdata;
    before(()=>{    
        //url=prop.getEnvValue(urlVariable)  
        //load the data from fixtures
        cy.fixture("example").then((data) => {
            // "this" is still the test context object
            userdata = data;
            cy.log("Testing data from fixture - " + userdata[1].search_assert_value)
            //cy.log("Testing data from fixture - " + userdata)
          })

    })

    it("Open and navigate to the Site",()=>{
        cy.log("Testing data from fixture - " + userdata.search_assert_value)
    })

    it("Fixture Data",()=>{

        let userdata;
     
            //url=prop.getEnvValue(urlVariable)  
            //load the data from fixtures
            cy.fixture("example").then((data) => {
                // "this" is still the test context object
                userdata = data;
                cy.log("Testing data from fixture - " + userdata[1].search_assert_value)
                //cy.log("Testing data from fixture - " + userdata[1])
              })

    })

})
