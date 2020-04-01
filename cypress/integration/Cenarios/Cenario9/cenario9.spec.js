/// <reference types="Cypress" />

import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

When (/preencho o cnpj com valor inválido/, () => {
    cy.get('[data-testid=cnpj]').type("01.234.567/8910-11")
})

Then (/vejo a mensagem de valor inválido/, () => {
    cy.get('.invalid-feedback').contains("valor inválido")
})