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
const assert=new AssertionLibrary();
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
let header_myname="[id='__next']>div>div>div>a>span"
let header_projects=":nth-child(1) > .HeaderStyles__NavLink-sc-9w0vkp-5"
let header_tech=":nth-child(2) > .HeaderStyles__NavLink-sc-9w0vkp-5"
let header_timelines=":nth-child(3) > .HeaderStyles__NavLink-sc-9w0vkp-5"

let social_icon_1="[id='__next']>div>div>div>a:nth-child(1)" //first
let social_icon_2="[id='__next']>div>div>div>a:nth-child(2)"
let social_icon_3="[id='__next']>div>div>div>a:nth-child(3)"


let typerwriter=".App > :nth-child(1)"
let aboutme=".HeroStyles__LeftSection-pbjia3-0 > .GlobalComponents__SectionText-sc-6qzy6y-3"
let AutomationSkill=":nth-child(1) > .TechnologiesStyles__ListContainer-sc-1ehw0pq-3 > .TechnologiesStyles__ListTitle-sc-1ehw0pq-4"

let footer=".FooterStyles__Slogan-sc-1ifsifd-4"

const basePage = new BasePage()

class mybioPage{ 

  checkTheHeader(myname,projects,tech,timelines){
    //Checking the Header
    assert.AssertValueContains(header_myname,myname)
    assert.AssertValueEqual(header_myname,myname)

    //Checking the Header options
    assert.AssertValueContains(header_projects,projects)
    assert.AssertValueEqual(header_projects,projects)

    assert.AssertValueContains(header_tech,tech)
    assert.AssertValueEqual(header_tech,tech)

    assert.AssertValueContains(header_timelines,timelines)
    assert.AssertValueEqual(header_timelines,timelines)
    

    //Checking the Social media icons on Header
    assert.ElementAtFirstShouldVisible(social_icon_1)
    assert.ElementShouldVisible(social_icon_2)
    assert.ElementShouldVisible(social_icon_3)

  }

    checkTheHeaderNavigation(projects,tech,timelines){
    //After Clicking the Project button
    action.clickTheElement(header_projects)
    assert.ValidateURLContains(projects)

    //After Clicking the tech button
    action.clickTheElement(header_tech)
    assert.ValidateURLContains(tech)

    //After Clicking the #about button
    action.clickTheElement(header_timelines)
    assert.ValidateURLContains(timelines)

    //Check the Footer
    assert.ElementShouldVisible(footer)
    action.getTheText(footer)
    //Display the Footer


  }
     
} module.exports = mybioPage