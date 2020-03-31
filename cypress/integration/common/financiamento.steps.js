import {When} from "cypress-cucumber-preprocessor/steps";
import loc from "../../support/locators";


When(/^clico no icone de financiamentos$/, () => {
    cy.get('.panel > #bn-navbar > .nav > :nth-child(2) > .nav-link > .d-flex > .ng-tns-c5-2 > .fa')
        .click()
})

When(/^vejo a tela de financiamento$/, () => {
    cy.get('h3').contains('Solicitações de Financiamentos')
})

When(/^clico no botão de solicitar financiamento$/, () => {
    cy.get('[data-testid=solicitarFinanciamento]').click()
})

When (/clico no botão salvar/, () => {
    cy.get('[data-testid=salvar]').click()
})


Then (/vejo botão de enviar habilitado/, () => {
    cy.get(loc.FORM_FINANCIAMENTO.BTN_ENVIAR).should("not.have.css", "disabled")  
})