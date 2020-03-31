import {When, Given, Then} from "cypress-cucumber-preprocessor/steps";
import {Cenario3Helper} from "./cenario3Helper";
import {FormHelper} from "../../common/helpers/formHelper";
import {DadosFalsosHelper} from "../../common/helpers/dadosFalsosHelper";

Given(/^que crio (\d+) cliente(?:s?) com somatorio acima de 10 milhões$/, (quantidade) => {
    var i;
    for(i = 0; i < quantidade; i++) {
        cy.get('[data-testid=cliente]')
            .last()
            .within(() => {
                const cnpjAleatorio = DadosFalsosHelper.cnpj();
                FormHelper.preencherFormulario({
                    cnpj: cnpjAleatorio,
                    valor: 600000000,
                })
            })
        if(i+1 < quantidade) {
            cy.get('.ng-invalid > .btn')
                .click()
        }
    }
})

Given(/^que crio (\d+) cliente(?:s?) com somatorio abaixo de 10 milhões$/, (quantidade) => {
    var i;
    for(i = 0; i < quantidade; i++) {
        cy.get('[data-testid=cliente]')
            .last()
            .within(() => {
                const cnpjAleatorio = DadosFalsosHelper.cnpj();
                FormHelper.preencherFormulario({
                    cnpj: cnpjAleatorio,
                    valor: 400000000,
                })
            })
        if(i+1 < quantidade) {
            cy.get('.ng-invalid > .btn')
                .click()
        }
    }
})

Then(/^verifico a mensagem confirmando o valor acima de 10 milhões$/, () => {
    cy.get('[data-testid=erro-valor-minimo]').should('not.exist')
})

Then(/^verifico a mensagem confirmando o valor abaixo de 10 milhões$/, () => {
    cy.get('[data-testid=erro-valor-minimo]').should('exist')
})