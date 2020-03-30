export const UsuarioHelper = {
    MASTER_INTERNO: {
        "cnpj": "00622416000141",
        "nome": "teste2",
        "senha": "Padaria123",
    },

    login: function () {
        cy.visit('portal-h.bndes.gov.br/habilitacao')
        cy.get(loc.LOGIN.CNPJOUCPF).type(this.MASTER_INTERNO.cnpj)
        cy.get(loc.LOGIN.USUARIO).type(this.MASTER_INTERNO.nome)
        cy.get(loc.LOGIN.SENHA).type(this.MASTER_INTERNO.senha)
        cy.get(loc.LOGIN.BTN_ENTRAR).click()
    }
}