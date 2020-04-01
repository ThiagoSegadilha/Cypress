import {When, Given, Then} from "cypress-cucumber-preprocessor/steps";

Given(/^que abri uma solicitação concluida$/, () => {
    cy.get('[data-testid=nomeEstadoAtual]')
        .contains("concluído")
        .last()
        .click()
})

When(/^verifico se o formulário esta desabilitado$/, () => {
    cy.get('[data-testid=cnpj]').should('exist','readonly')
    cy.get('[data-testid=valor]').should('exist','readonly')
    cy.get('[data-testid=empregosAntes]').should('exist','readonly')
    cy.get('[data-testid=empregosDurante]').should('exist','readonly')
    cy.get('[data-testid=empregosDepois]').should('exist','readonly')
    cy.get('[data-testid=empregosComentario]').should('exist','readonly')
    cy.get('[data-testid=sim]').should('exist','disabled')
    cy.get('[data-testid=não]').should('exist','disabled')
    cy.get('[data-testid=anexos]').should('exist','readonly')
    cy.get('[data-testid=descricaoGarantias]').should('exist','readonly')
})

When(/^se o botão salvar está desabilitado$/, () => {
    cy.get('solicitacao.ng-star-inserted > :nth-child(1) > div').should('exist','disabled')
})

When(/^se existe histórico$/, () => {
    cy.get('.re-align').should('exist')
})