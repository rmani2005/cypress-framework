import Home from "../Page/Home"
import ActionsLibrary from "../ActionsLibrary/ActionsLibrary"
import ConfigProperty from "../Config/ConfigProperty"
import logger from "../Logger/logger"
import BrowserService from "../BrowserManager/BrowserService"
import data from '../fixtures/example.json'

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
        
    })

    it("Open and navigate to the Site",()=>{
    
    cy.fixture("example").then((data) => {
        data.forEach((userdata)=>{
            //Navigate to the URL required  
           
            cy.log("Testing data from fixture - " + userdata.search_assert_value)

        })  

        })
    })

    it("Search the Product",()=>{
        home.searchInput("HTC Touch HD")
        home.getSearchButton().click()
    })


    after(()=>{
       // home.visit()
    })

})


//Get current test title
describe('app layout and responsiveness', () => {
    it('toggles the nav', () => {
      expect(Cypress.currentTest.title).to.eq('toggles the nav')
    })
  })

//Current Test Title and Path
describe('app layout and responsiveness', () => {
    it('toggles the nav', () => {
      expect(Cypress.currentTest.titlePath).to.deep.eq([
        'app layout and responsiveness',
        'toggles the nav',
      ])
    })
  })