import Blog from "../Page/Blog"
import logger from "../Logger/logger"

//Creating object for the Class
const blog=new Blog()
const log=new logger()

//Test Starts with Describe
describe("Testing the Blog page", ()=>{

    beforeEach("",()=>{
        cy.on('uncaught:exception', (err, runnable) => {
                console.log('Application Error Javascript Token')
                cy.log('Application Error Javascript Token')
                return false
                //return true
        })
        blog.visit();
        log.info("Navigating to Blog page")
    })

    it("Check the Title",()=>{
        cy.title().should("eq","Blog - Poco theme")    
    })


    it("Should have correct category names",()=>{   

        blog.getFirstCategoryButton().should("contains.text","Business")
        blog.getSecondCategoryButton().should("contains.text","Electronics")
        blog.getThirdCategoryButton().should("contains.text","Technology")

    })


})