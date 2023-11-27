/// <reference types="cypress" />

import mybioPage from "../Page/mybioPage"
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
const my=new mybioPage();

//Objects
const urlVariable="url_goggle";
const url="";
describe("TC001_Testing my bio site up and running", ()=>{
    let userdata;
    beforeEach(()=>{    
        const url=prop.getEnvValue(urlVariable)
        //load the data from fixtures
        cy.fixture("example").then((data) => {
          userdata=data;
          data.forEach((userdata)=>{
              //Navigate to the URL required  
             
              cy.log("Testing data from fixture - " + userdata.search_assert_value)
  
          })  
  
          })
      })

        //Fluent Design Pattern
        it("TC001a_Check the Header and header links",()=>{
          Browser.navigateTo(url)
          my.checkTheHeader("Manikandan Ravi","Projects","Technology","Timelines")
          //Check the naivgation of the page with URL
          my.checkTheHeaderNavigation("#projects","#tech","#about")
         })

        //Page Factor Design Pattern
        it("TC001b_Check the Header and header links with invalid values",()=>{
          Browser.navigateTo(url)
          my.checkTheHeader("Manikandan","Projects123","Technology444","Timeline")
          //Check the naivgation of the page with URL
          my.checkTheHeaderNavigation("#projectsss","#technologies","#aboutMe")

            })

        //Facade Design Pattern
        it("TC001c_Check the Header and header links with invalid values",()=>{
          Browser.navigateTo(url)
          my.checkTheHeader("Manikandan","Projects#%#%","Tech","Time line")
          //Check the naivgation of the page with URL
          my.checkTheHeaderNavigation("#proj","#tech@$@","#ABOUTUS")

            })

          //API URI = https://manikandanravi.in/api/hello
          //Response = {"name":"John Doe"}
          //Check the GET API call
          it("TC004_API GET call",()=>{
            cy.request({
              method: 'GET', 
              url: 'https://manikandanravi.in/api/hello', 
              qs: {
                //starred: 'true'
              },
              headers: {
                accept: 'application/json'
              }
            })
          })

          //Check the POST API call

          //Check the PUT API call

          //Check the DELETE API call
    
})


//Get current test title
describe('TC002_Test to check Cypress built it API to get the title', () => {
    it('The Cypress built it API to get the title', () => {
      expect(Cypress.currentTest.title).to.eq('The Cypress built it API to get the title')
    })
  })

//Current Test Title and Path
describe('TC003_Test to check Cypress built it API to get the title & its path', () => {
    it('The Cypress built it API to get the title & its path', () => {
      //Chai - expect keyword from chai
      expect(Cypress.currentTest.titlePath).to.deep.eq(
        [
        'TC003_Test to check Cypress built it API to get the title & its path',
        'The Cypress built it API to get the title & its path',
        ])
    })
  })