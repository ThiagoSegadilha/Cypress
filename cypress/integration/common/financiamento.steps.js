import {When} from "cypress-cucumber-preprocessor/steps";
import loc from "../../support/locators";

Given (/que vejo o formulário de pedido de financiamento/, () => {
    cy.get('[data-testid=clientes]').contains("Clientes")
})

When(/^clico no icone de financiamentos$/, () => {
    cy.get('.panel > #bn-navbar > .nav > :nth-child(2) > .nav-link')
        .should('be.visible')
        .click()
})

When(/^vejo a tela de financiamento$/, () => {
    cy.get('h3').contains('Solicitações de Financiamentos')
})

When(/^clico no botão de solicitar financiamento$/, () => {
    cy.get('[data-testid=solicitarFinanciamento]').click()
})

When (/clico no botão salvar/, () => {
    cy.get('[data-testid=salvar]').click({force: true})
})

When (/clico no botão enviar/, () => {
    cy.get(loc.FORM_FINANCIAMENTO.BTN_ENVIAR).click()
})

Then (/vejo botão de enviar habilitado/, () => {
    cy.get(loc.FORM_FINANCIAMENTO.BTN_ENVIAR).should("not.have.attr", "disabled")  
})

Then (/vejo botão de enviar desabilitado/, () => {
    cy.get(loc.FORM_FINANCIAMENTO.BTN_ENVIAR).should("have.attr", "disabled")  
})