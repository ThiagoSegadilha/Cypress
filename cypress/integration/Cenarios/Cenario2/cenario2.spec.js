/// <reference types="Cypress" />

import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import loc from "../../../support/locators";
import {UsuarioHelper} from "../../common/helpers/usuarioHelper";

Given (/vejo o formulário de pedido de financiamento/, () => {
    cy.get('[data-testid=clientes]').contains("Clientes")
})

When (/preencho todos os campos/, () => {
    cy.get('[data-testid=cnpj]').type(UsuarioHelper.CLIENTE_EXTERNO.cnpj)
    cy.get('[data-testid=valor]').type("1000000000")
    cy.get('[data-testid=empregosAntes]').type("100")
    cy.get('[data-testid=empregosDurante]').type("90")
    cy.get('[data-testid=empregosDepois]').type("50")
    cy.get('[data-testid=empregosComentario]').type("Devido a pandemia")
    cy.get('[data-testid=opcao-sim-nao] > :nth-child(2)').click()
    cy.get('[data-testid=descricaoGarantias]').type("Garantia dada pelo agente financeiro")
})