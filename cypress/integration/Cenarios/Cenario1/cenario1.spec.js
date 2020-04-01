import {When} from "cypress-cucumber-preprocessor/steps";
import {UsuarioHelper} from "../../common/helpers/usuarioHelper";
import loc from "../../../support/locators";

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

When (/preencho o comentário/, () => {
    cy.get('#txtComentario').type("Teste Cypress")
})

When (/solicitação deve ser enviada com sucesso/, () => {
    cy.get(loc.ENVIAR_SOLICITAÇÃO.BTN_ENVIAR)
        .click()
    cy.get('.bn-alerts').contains("Envio realizado com sucesso")
})