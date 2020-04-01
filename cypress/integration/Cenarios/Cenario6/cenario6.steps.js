import {When, Given, Then} from "cypress-cucumber-preprocessor/steps";

Given(/^que abri uma solicitação devolvida$/, () => {
    cy.get('[data-testid=nomeEstadoAtual]')
        .contains("devolvido")
        .last()
        .click()
})

When(/^verifico se o formulário esta desabilitado$/, () => {
    cy.get('[data-testid=cnpj]').should('not.exist','readonly')
    cy.get('[data-testid=valor]').should('not.exist','readonly')
    cy.get('[data-testid=empregosAntes]').should('not.exist','readonly')
    cy.get('[data-testid=empregosDurante]').should('not.exist','readonly')
    cy.get('[data-testid=empregosDepois]').should('not.exist','readonly')
    cy.get('[data-testid=empregosComentario]').should('not.exist','readonly')
    cy.get('[data-testid=sim]').should('not.exist','disabled')
    cy.get('[data-testid=não]').should('not.exist','disabled')
    cy.get('[data-testid=anexos]').should('not.exist','readonly')
    cy.get('[data-testid=descricaoGarantias]').should('not.exist','readonly')
})

When(/^se existe histórico$/, () => {
    cy.get('.re-align').should('exist')
})