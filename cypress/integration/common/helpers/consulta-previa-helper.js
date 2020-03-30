import {SpinnerHelper} from "./spinnerHelper";
import {FormHelper} from "./formHelper";

export const ConsultaPreviaHelper = {
  novaSolicitacao() {
    cy.server()
    cy.route('POST', '/rest/consulta-previa/novo').as('novo')
    cy.route('/rest/consulta-previa/*/roteiro').as('roteiro')
    cy.visit('#/financiamento/novo')
    cy.wait(['@novo','@roteiro'])

    SpinnerHelper.aguardarSpinnerDesaparecer()
    cy.contains('titulo-processo', 'Solicitação de Financiamento')
  }
}
