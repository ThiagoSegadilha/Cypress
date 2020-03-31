import {StringHelper} from './stringHelper';
import {HttpHelper} from "./httpHelper";

export const AutenticacaoHelper = {
    autenticarUsuario: function (usuario) {
        return this.autenticar(usuario.cnpj, usuario.nome, usuario.senha)
    },

    autenticar: function (cnpj, username, password) {
        console.debug('autenticar', cnpj, username, password)
        console.debug('baseUrl', Cypress.config().baseUrl)
        // funciona: curl 'http://localhost:4204/rest/public/a03/user/auth' -H 'Pragma: no-cache' -H 'Origin: http://localhost:4204' -H 'Accept-Encoding: gzip, deflate' -H 'Accept-Language: pt-BR' -H 'User-Agent: Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/3.4.1 Chrome/61.0.3163.100 Electron/2.0.18 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded' -H 'Accept: application/json, text/plain, */*' -H 'Cache-Control: no-cache' -H 'Referer: http://localhost:4204/' -H 'Proxy-Connection: keep-alive' --data 'j_cnpj=00622416000141&j_username=teste&j_password=Padaria123' --compressed
        // funciona: curl 'https://web.dsv.bndes.net/habilitacao/rest/public/a03/user/auth' -H 'Pragma: no-cache' -H 'Origin: https://web.dsv.bndes.net' -H 'Accept-Encoding: gzip, deflate' -H 'Accept-Language: pt-BR' -H 'User-Agent: Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/3.4.1 Chrome/61.0.3163.100 Electron/2.0.18 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded' -H 'Accept: application/json, text/plain, */*' -H 'Cache-Control: no-cache' -H 'Referer: https://web.dsv.bndes.net/habilitacao/' -H 'Connection: keep-alive' --data 'j_cnpj=00622416000141&j_username=teste&j_password=Padaria123' --compressed --insecure
        // quebrado:
        HttpHelper.post(
            'https://portal-h.bndes.gov.br/prc/',
            {
                j_cnpj: StringHelper.apenasNumeros(cnpj),
                j_username: username,
                j_password: password
            },
            {
                "Content-Type": "application/x-www-form-urlencoded",
            }
        ).then((resp) => {
            console.debug('autenticar response', resp)
            const cookies = resp.headers['set-cookie']
            cookies.forEach(cookie => {
                const firstPart = cookie.split(';')[0]
                const separator = firstPart.indexOf('=')
                const name = firstPart.substring(0, separator)
                const value = firstPart.substring(separator + 1)
                console.debug('cookie', name, value)
                cy.setCookie(name, value)
            })
        })
    },
}
