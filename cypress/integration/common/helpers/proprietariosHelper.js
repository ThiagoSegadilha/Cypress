import {FormHelper} from "./formHelper";
import {BooleanHelper} from "./booleanHelper";

export const ProprietariosHelper = {
    addPessoaJuridica(cnpj, nome, garantidor, capitalVotante, capitalTotal, controlador) {
        this.addMembroDaPJ('PessoaJuridica', cnpj, nome, garantidor, capitalVotante, capitalTotal, controlador);
    },
    addPessoaFisica(cpf, nome, garantidor, capitalVotante, capitalTotal, controlador) {
        this.addMembroDaPJ('PessoaFisica', cpf, nome, garantidor, capitalVotante, capitalTotal, controlador);
    },
    removerTodos() {
        cy.get('[data-testid^=membro--excluir]')
            .each(($element) => {
                cy.wrap($element).click()
                cy.get('.btn-danger').click()
            })
    },
    addMembroDaPJ: function (tipoPessoa, cpfCnpj, nome, garantidor, capitalVotante, capitalTotal, controlador) {
        cy.get('dropdownSocio').click()
        cy.get(`addSocio${tipoPessoa}`).click()

        garantidor = BooleanHelper.paraSimNao(garantidor)
        controlador = BooleanHelper.paraSimNao(controlador)
        capitalVotante *= 100
        capitalTotal *= 100

        cy.get('pessoa-juridica-membro')
            .last()
            .within(() => {
                FormHelper.preencherFormulario({
                    'cpf, cnpj': cpfCnpj,
                    nome,
                    garantidor,
                    capitalVotante,
                    capitalTotal,
                    controlador,
                })
            })
    },
}
