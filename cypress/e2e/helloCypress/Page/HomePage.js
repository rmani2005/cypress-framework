/// <reference types="cypress" />

import BasePage from "./BasePage"
import ActionsLibrary from "../ActionsLibrary/ActionsLibrary"
import AssertionLibrary from "../AssertionLibrary/AssertionLibrary"
import ConfigProperty from "../Config/ConfigProperty"
import logger from "../Logger/logger"
import BrowserService from "../BrowserManager/BrowserService"

//Common class objects
const log=new logger();
const action=new ActionsLibrary();
const prop=new ConfigProperty();
const Browser=new BrowserService();

//Common Actions 
//Common Assertions
//Page Specific actions
//Page Specific assettion
//Page Specific objects
//Page object Stratergy
//Page wait Stratergy

//Object Names
let serachInputLocator="#search > div.search-input-group.flex-fill > div.search-input.d-flex > div.flex-fill > input[name='search']"
let homeButton="#widget-navbar-217834 > ul > li:nth-child(1) > a > div > span"
let searchinputbox="#search > div.search-button > button"

const basePage = new BasePage()

class Home{ 

    //Visit 
    visit(){
      cy.visit("/");
      basePage.visitFromBase();
    }

    visit(text){
      cy.visit(text)
    }

    searchInput(text){
        //return cy.get(serachInputLocator).first().type(text)

        return action.typeAtFirstAndValidate(serachInputLocator,text)
    }

     getSearchButton() {
        return cy.get("#search > div.search-button > button").first()
      }

      getHomeButton() {
        return cy.get(homeButton)
      }
     
      getSpecialButton() {
        return cy.get(
          "#widget-navbar-217834 > ul > li:nth-child(2) > a > div > span"
        )
      }
     
      getBlogButton() {
        return cy.get(
          "#widget-navbar-217834 > ul > li:nth-child(3) > a > div > span"
        )
      }
     
      getMegaMenuButton() {
        return cy.get(
          "#widget-navbar-217834 > ul > li.nav-item.dropdown.dropdown-hoverable.mega-menu.position-static > a > div > span"
        )
      }
     
      getAddOnsButton() {
        return cy.get(
          "#widget-navbar-217834 > ul > li:nth-child(5) > a > div > span"
        )
      }
     
      getMyAccountLink() {
        return cy.get(
          "#widget-navbar-217834 > ul > li:nth-child(6) > a > div > span"
        )
      }
} module.exports = Home