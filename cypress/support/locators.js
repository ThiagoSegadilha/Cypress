const locators = {
    LOGIN: {
        CNPJOUCPF: '[data-testid=login-cnpj]',
        USUARIO: '[data-testid=login-usuario]',
        SENHA: '[data-testid=login-senha]',
        BTN_ENTRAR: '[data-testid=entrar]'
    },
    FORM_FINANCIAMENTO: {
        BTN_ENVIAR: '[data-testid=enviar]'
    },
    ENVIAR_SOLICITAÇÃO: {
        BTN_ENVIAR: '.modal-footer > .btn'
    }
}
export default locators;