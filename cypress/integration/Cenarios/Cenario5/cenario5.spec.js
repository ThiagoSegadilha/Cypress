/// <reference types="Cypress" />

import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import { HabilitacaoHelper } from "../../common/helpers/habilitacaoHelper"

When (/verifico disponibilidade de cada campo/, () => {
    cy.get('[data-testid=cnpj]')
        .should('not.have.css', 'disabled')
    cy.get('[data-testid=valor]')
        .should('not.have.css', 'disabled')
    cy.get('[data-testid=empregosAntes]')
        .should('not.have.css', 'disabled')
    cy.get('[data-testid=empregosDurante]')
        .should('not.have.css', 'disabled')
    cy.get('[data-testid=empregosDepois]')
        .should('not.have.css', 'disabled')
    cy.get('[data-testid=empregosComentario]')
        .should('not.have.css', 'disabled')
    cy.get('[data-testid=opcao-sim-nao] > :nth-child(2)')
        .should('not.have.css', 'disabled')
    cy.get('[data-testid=descricaoGarantias]')
        .should('not.have.css', 'disabled')
})

When (/verifico se botão salvar está desabilitado/, () => {
    cy.get('[data-testid=salvar]')
        .should('exist', 'disabled')
})

When (/preencho algum campo/, () => {
    cy.get('[data-testid=empregosComentario]').type(" ")
})

Then (/vejo botão salvar habilitado/, () => {
    cy.get('[data-testid=salvar]')
        .should('not.have.attr', 'disabled')
})