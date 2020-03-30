export const EnvHelper = {
    obterVariavelDeAmbiente: function (chave, valorPadrao) {
        const valor = Cypress.env(chave);
        if (!valor) {
            if (valorPadrao != undefined) {
                return valorPadrao
            } else {
                const ambiente = Cypress.env('configFile')
                throw `Não encontrei a definição do valor para "${chave}" em cypress/config/${ambiente}.json`
            }
        }
        return valor
    },
}
