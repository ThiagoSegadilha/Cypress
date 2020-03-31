import {When} from "cypress-cucumber-preprocessor/steps";

When(/^clico no icone de financiamentos$/, () => {
    cy.get('.panel > #bn-navbar > .nav > :nth-child(2) > .nav-link > .d-flex > .ng-tns-c5-2 > .fa')
        .click()
})

When(/^vejo a tela de financiamento$/, () => {
    cy.get('h3').contains("Financiamentos")
})

When(/^clico no botão de solicitar financiamento$/, () => {
    cy.get('[data-testid=solicitarFinanciamento]').click()
})