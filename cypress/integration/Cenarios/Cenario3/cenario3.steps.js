import {When, Given, Then} from "cypress-cucumber-preprocessor/steps";
import {Cenario3Helper} from "./cenario3Helper";
import {FormHelper} from "../../common/helpers/formHelper";

Given(/^que crio (\d+) cliente(?:s?)$/, (quantidade) => {
    var i;
    for(i = 1; i < quantidade; i++) {
        cy.get('.ng-untouched.ng-star-inserted > .btn')
            .click()
    }
})

When(/^preencho os (\d+) cliente(?:s?)$/, () => {
    cy.get('[data-testid=clientes]')
        .find('[data-testid=cliente]')
        .then(qtd => {
            var i, perfil;
            for(i = 0; i < qtd.length; i++) {
                switch (i) {
                    case 0:
                        perfil = Cenario3Helper.PERFIL_1;
                        break;
                    case 1:
                        perfil = Cenario3Helper.PERFIL_2;
                        break;
                    case 2:
                        perfil = Cenario3Helper.PERFIL_3;
                        break;
                }

            FormHelper.preencherCampo(':nth-child('+(i+1)+') > .card-body > :nth-child(2) > .form-group > [data-testid=cnpj]', perfil.cnpj);
            FormHelper.preencherCampo(':nth-child('+(i+1)+') > .card-body > :nth-child(3) > .form-group > [data-testid=valor]', perfil.valor);
            }
        })
})

Then(/^verifico a mensagem confirmando o valor acima de 10 milhões$/, () => {
    cy.log('[data-testid=valorTotal]')
})