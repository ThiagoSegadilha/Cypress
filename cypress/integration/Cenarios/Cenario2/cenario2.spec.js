/// <reference types="Cypress" />

import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import loc from "../../../support/locators";
import {UsuarioHelper} from "../../common/helpers/usuarioHelper";

Given("que logo como cliente externo", () => {
    UsuarioHelper.login_externo()
    cy.get('h3').contains("Habilitação / Análise Cadastral")
})

When("clico no icone de financiamentos", () => {
    cy.get('.panel > #bn-navbar > .nav > :nth-child(2) > .nav-link').click()
}),

When ("vejo a tela de financiamento", () => {
    cy.get('h3').contains("Solicitações de Financiamentos")
})

When ("clico no botão para solicitar um financiamento", () => {
    cy.get('[data-testid=solicitarFinanciamento]').click()
})

Then ("vejo o formulário de pedido de financiamento", () => {
    cy.get('[data-testid=clientes]').contains("Clientes")
})

//Cenário
When ("preencho todos os campos", () => {
    cy.get('[data-testid=cnpj]').type(UsuarioHelper.CLIENTE_EXTERNO.cnpj)
    cy.get('[data-testid=valor]').type("1000000000")
    cy.get('[data-testid=empregosAntes]').type("100")
    cy.get('[data-testid=empregosDurante]').type("90")
    cy.get('[data-testid=empregosDepois]').type("50")
    cy.get('[data-testid=empregosComentario]').type("Devido a pandemia")
    cy.get('[data-testid=opcao-sim-nao] > :nth-child(2)').click()
    cy.get('[data-testid=descricaoGarantias]').type("Garantia dada pelo agente financeiro")
})

When ("clico no botão salvar", () => {
    cy.get('[data-testid=salvar]').click()
})

Then ("vejo botão de enviar habilitado", () => {
    cy.get(loc.FORM_FINANCIAMENTO.BTN_ENVIAR).should("not.have.css", "disabled")  
})