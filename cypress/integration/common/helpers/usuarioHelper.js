import loc from '../../../support/locators'

export const UsuarioHelper = {
    CLIENTE_EXTERNO: {
        "cnpj": "00622416000141",
        "nome": "teste",
        "senha": "Padaria123",
    },

    login_externo: function () {
        cy.visit('https://portal-h.bndes.gov.br/habilitacao')
        cy.get(loc.LOGIN.CNPJOUCPF).type(this.CLIENTE_EXTERNO.cnpj)
        cy.get(loc.LOGIN.USUARIO).type(this.CLIENTE_EXTERNO.nome)
        cy.get(loc.LOGIN.SENHA).type(this.CLIENTE_EXTERNO.senha)
        cy.get(loc.LOGIN.BTN_ENTRAR).click()
    }
}