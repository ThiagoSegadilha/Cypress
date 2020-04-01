import {When, Given, Then} from "cypress-cucumber-preprocessor/steps";

Given(/^que abri uma solicitação em análse$/, () => {
    cy.get('[data-testid=nomeEstadoAtual]').contains("em análise").last().click()
})