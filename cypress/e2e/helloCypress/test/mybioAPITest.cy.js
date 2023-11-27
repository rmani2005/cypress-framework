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
      cy.on('uncaught:exception', (err, runnable) => {
          console.log('Application Error Javascript Token')
          cy.log('Application Error Javascript Token')
          return false
        //return true
        })
        const url=prop.getEnvValue(urlVariable)
        //load the data from fixtures
        cy.fixture("example").then((data) => {
          userdata=data;
          data.forEach((userdata)=>{
              //Navigate to the URL required  
              // cy.log("Testing data from fixture - " + userdata.search_assert_value)
          }) 
          })
      })


          //API URI = https://manikandanravi.in/api/hello
          //Response = {"name":"John Doe"}
          //Check the GET API call
          it("TC004_API GET call",()=>{
            cy.request({
              method: 'GET', 
              url: '/api/hello', 
              qs: {
                //starred: 'true'
              },
              headers: {
                accept: 'application/json'
              }
            }).then((board) => {
              cy.log(board.status) // 201
              cy.log(board.duration) // 11
              cy.log(board.body)
              //Traverse through json
              expect(board.body.name).to.equal('John Doe')
            })
          })
          //Check the POST API call
          it("TC005_API POST call",()=>{
            
            cy.request({
              method: 'POST', 
              url: '/api/hello', 
              body: {
                //name: 'space travel plan'
              }
            }).then( ({ status }) => {
              console.log(status) // 201
              expect(status).to.eq(201) 
            })
          })

          

          //Check the PUT API call
          it("TC006_API PUT call",()=>{
                      
            cy.request({
              method: 'PUT', 
              url: '/api/hello', 
              body: {
                //name: 'space travel plan'
              }
            }).then( ({ status }) => {
              console.log(status) // 201
              expect(status).to.eq(201) 
            })
          })

          //Check the DELETE API call
           it("TC007_API DELETE call",()=>{
            
            cy.request({
              method: 'DELETE', 
              url: '/api/hello', 
              body: {
                //name: 'space travel plan'
              }
            }).then( ({ status }) => {
              console.log(status) // 201
              expect(status).to.eq(201) 
            })
          })

          //Validting the 

          //Check the response
          

})

