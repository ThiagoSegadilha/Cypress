import {When} from "cypress-cucumber-preprocessor/steps";

When(/^que estou autenticado como cliente externo$/, () => {
    cy.visit('https://www.google.com/')
})
