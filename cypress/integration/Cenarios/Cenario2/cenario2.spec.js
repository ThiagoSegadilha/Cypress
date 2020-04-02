/// <reference types="Cypress" />

import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import loc from "../../../support/locators";
import financiamentoJson from "../../../fixtures/financiamento.json"
import {UsuarioHelper} from "../../common/helpers/usuarioHelper";
import { FormHelper } from "../../common/helpers/formHelper";

When (/preencho todos os campos/, () => {
    FormHelper.preencherFormulario(financiamentoJson)
    /* cy.get('[data-testid=cnpj]').type(UsuarioHelper.CLIENTE_EXTERNO.cnpj)
    cy.get('[data-testid=valor]').type("1000000000")
    cy.get('[data-testid=empregosAntes]').type("100")
    cy.get('[data-testid=empregosDurante]').type("90")
    cy.get('[data-testid=empregosDepois]').type("50")
    cy.get('[data-testid=empregosComentario]').type("Devido a pandemia")
    cy.get('[data-testid=opcao-sim-nao] > :nth-child(2)').click()
    cy.get('[data-testid=descricaoGarantias]').type("Garantia dada pelo agente financeiro") */
})

When (/não informo sobre possível licença ambiental/, () => {
    cy.get('[data-testid=cnpj]').type(UsuarioHelper.CLIENTE_EXTERNO.cnpj)
    cy.get('[data-testid=valor]').type("1000000000")
    cy.get('[data-testid=empregosAntes]').type("100")
    cy.get('[data-testid=empregosDurante]').type("90")
    cy.get('[data-testid=empregosDepois]').type("50")
    cy.get('[data-testid=empregosComentario]').type("Devido a pandemia")
    cy.get('[data-testid=descricaoGarantias]').type("Garantia dada pelo agente financeiro")
})

When (/vejo a mensagem de campo inválido/, () => {
    cy.get('.invalid-feedback')
        .should('be.visible')
        .contains('informe este campo')
    })

When (/altero o valor para abaixo de 10 milhões/, () => {
    cy.get('[data-testid=valor]')
    .clear()
    .type("500000000")
})

When (/vejo a mensagem de valor mínimo/, () => {
    cy.get('[data-testid=erro-valor-minimo]')
    .contains("O financiamento deve estar acima do valor mínimo")
})

//Códigos para limpar os campos
when (/limpo o campo cnpj/, () => {
    cy.get('[data-testid=cnpj]').clear()
})

when (/limpo o campo valor/, () => {
    cy.get('[data-testid=valor]').clear()
})

When (/limpo o campo empregos antes/, () => {
    cy.get('[data-testid=empregosAntes]').clear()
})

When (/limpo o campo empregos durante/, () => {
    cy.get('[data-testid=empregosDurante]').clear()
})

When (/limpo o campo empregos depois/, () => {
    cy.get('[data-testid=empregosDepois]').clear()
})

When (/limpo o campo descrição garantias/, () => {
    cy.get('[data-testid=descricaoGarantias]').clear()
})