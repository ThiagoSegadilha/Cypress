/// <reference types="Cypress" />

import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import {AutenticacaoHelper} from "../../common/helpers/autenticacaoHelper";
import {UsuarioHelper} from "../../common/helpers/usuarioHelper";

Given("que logo como cliente externo", () => {
    UsuarioHelper.login_externo()
    cy.get('h3').contains("Habilitação / Análise Cadastral")
})

when("clico no icone de financiamentos", () => {
    cy.get('.panel > #bn-navbar > .nav > :nth-child(2) > .nav-link').click()
}),

Then ("vejo a tela de financiamento", () => {

})