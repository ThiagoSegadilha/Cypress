import {When, Given, Then} from "cypress-cucumber-preprocessor/steps";
import {FormHelper} from "../../common/helpers/formHelper";

Given(/^que preenchi o formulario do cliente com um CNPJ que não seja matriz$/, () => {
    FormHelper.preencherFormulario({
        cnpj: 91501783000819,
        valor: 1200000000,
    })
})

Then(/^vejo a mensagem de erro$/, () => {
    cy.get('.col-sm > .ng-tns-c2-0')
        .contains("CNPJ informado deve ser da matriz da empresa.")
})