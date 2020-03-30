// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import loc from './locators'

Cypress.Commands.add('login', () => {
    cy.visit('portal-h.bndes.gov.br/habilitacao')
    cy.get(loc.LOGIN.CNPJOUCPF).type('00622416000141')
    cy.get(loc.LOGIN.USUARIO).type('teste')
    cy.get(loc.LOGIN.SENHA).type('Padaria123')
    cy.get(loc.LOGIN.BTN_ENTRAR).click()
})

Cypress.Commands.add('abrirHabilitacao', () => {    
    cy.get('[data-testid=botao-ver-processo]').click()
})