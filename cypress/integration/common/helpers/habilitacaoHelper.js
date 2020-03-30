import {HttpHelper} from './httpHelper';
import {SpinnerHelper} from "./spinnerHelper";
import {FormHelper} from "./formHelper";


export const HabilitacaoHelper = {
    cancelarMinhasHabilitacoes() {
        this.obterStatusDaMinhaHabilitacao()
            .then((status) => {
                const processosEmAberto = status.processoEmAberto;
                if (processosEmAberto && processosEmAberto.id) {
                    const idProcesso = processosEmAberto.id
                    return this.excluir(idProcesso)
                    // return this.cancelarHabilitacao(idProcesso)
                }
            })
    },
    obterStatusDaMinhaHabilitacao() {
        // curl 'http://localhost:4204/rest/habilitacao/status' -H 'Pragma: no-cache' -H 'Sec-Fetch-Site: same-origin' -H 'Accept-Encoding: gzip, deflate, br' -H 'x-ui-block: true' -H 'Accept-Language: pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7' -H 'User-Agent: Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36' -H 'Sec-Fetch-Mode: cors' -H 'Accept: application/json, text/plain, */*' -H 'Cache-Control: no-cache' -H 'Referer: http://localhost:4204/' -H 'Cookie: _ga=GA1.1.1426378163.1570556549; _gid=GA1.1.1023304693.1571061681; _gat_gtag_UA_104024144_2=1; IEW_CTRL=997710246; LtpaToken2=7mrYECKIeiyp2Ez5by/5pePhvtCaUYdHNKSEiDgZEi3dK9gKtA7eP6/hGbHGQq9tQCyMCl0cNz8JLjPp2W3OrOyWK95O/I9clYjKfLpizOkA9kCM2d6yheRtG8BpYSkGohLJgwJCXDna1b4GYyZE+eK8OY0cTXksyOjfRu1Wu/P+pdqqHDoaCkXLpaei0yONy+wfp5EOlA81S98fEUACdLyQuO4YVhn0NpA4NTyp94gjOFt27IBhlUzqUspxWLu972YizswNCAZpSHp/Bv/FHevPC6y47QsfyQgROV83QkV+IL4aWL1eTNT2KE9jNUdG/8hYqRLFXT+7dHlGje9OxBnr3v5OswjbSOG75QPJRnFRgYF8bgFkbninxGbNzRUO' -H 'Connection: keep-alive' --compressed
        // {"jaFoiHabilitado":false,"habilitacaoVigente":false,"processoEmAberto":{"type":"ProcessoHabilitacaoEntity","versao":1,"id":1120,"tipo":{"type":"ProcessoTipoEntity","id":2,"nome":"Habilitação","nomeTecnico":"habilitacao"},"dataInicio":"2019-10-14T15:03:13.333+0000","processoEntidades":[{"type":"ProcessoEntidadeEntity","versao":1,"id":1120,"entidade":{"id":87185,"codigoBNDES":871855,"cpfCnpj":"18725804","nome":"TELEMONT ENGENHARIA DE TELECOMUNICACOES S/A","sigla":"TELEMONT ENG","categoria":{"id":2,"nome":"Empresa"},"idNaturezaJuridica":24,"nomePrincipal":"TELEMONT ENGENHARIA DE TELECOMUNICACOES S/A","idEmpresa":"87185","indicadorMatriz":true},"idEntidade":87185}],"roteiros":[{"id":1100,"versaoRoteiro":{"type":"RoteiroDefinicaoVersaoEntity","definicao":{"type":"RoteiroDefinicaoEntity","nome":"Informações para Análise Cadastral, Jurídica e de Crédito","nomeTecnico":"fichas-cadastrais"},"roteiroInstrumentosFinanceiros":[],"secoes":[]},"roteiroBlocoInstancia":[],"arquivosAnexosRoteiro":[]}],"estadoAtual":{"id":100,"nome":"prc.estado.em_rascunho","classificacao":"br.gov.bndes.workflow.CLASSIF_ESTADO_INICIAL"}}}
        cy.log('obterStatusDaMinhaHabilitacao')
        return cy.request({
            method: 'GET',
            url: `rest/habilitacao/status`,
            headers: {
                "Pragma": "no-cache",
                "Sec-Fetch-Site": "same-origin",
                "Origin": Cypress.config().baseUrl,
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
                "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36",
                "Accept": "application/json, text/plain, */*",
                "Cache-Control": "no-cache",
                "Connection": "keep-alive",
                "Referer": Cypress.config().baseUrl,
            }
        }).then(response => {
            console.debug('statusHabilitacao', response)
            return response.body
        })
    },
    excluirRoteiroEmRascunho(id) {
        // curl 'http://localhost:4204/rest/roteiro/1100' -X DELETE -H 'Pragma: no-cache' -H 'Sec-Fetch-Site: same-origin' -H 'Origin: http://localhost:4204' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7' -H 'User-Agent: Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36' -H 'Sec-Fetch-Mode: cors' -H 'Accept: application/json, text/plain, */*' -H 'Cache-Control: no-cache' -H 'Referer: http://localhost:4204/' -H 'Cookie: _ga=GA1.1.1426378163.1570556549; _gid=GA1.1.1023304693.1571061681; IEW_CTRL=997710246; LtpaToken2=7mrYECKIeiyp2Ez5by/5pePhvtCaUYdHNKSEiDgZEi3dK9gKtA7eP6/hGbHGQq9tQCyMCl0cNz8JLjPp2W3OrOyWK95O/I9clYjKfLpizOkA9kCM2d6yheRtG8BpYSkGohLJgwJCXDna1b4GYyZE+eK8OY0cTXksyOjfRu1Wu/P+pdqqHDoaCkXLpaei0yONy+wfp5EOlA81S98fEUACdLyQuO4YVhn0NpA4NTyp94gjOFt27IBhlUzqUspxWLu972YizswNCAZpSHp/Bv/FHevPC6y47QsfyQgROV83QkV+IL4aWL1eTNT2KE9jNUdG/8hYqRLFXT+7dHlGje9OxBnr3v5OswjbSOG75QPJRnFRgYF8bgFkbninxGbNzRUO; _gat_gtag_UA_104024144_2=1' -H 'Connection: keep-alive' --compressed
        cy.log('excluirRascunho', id)
        return cy.request({
            method: 'DELETE',
            url: `rest/roteiro/${id}`,
            headers: {
                "Pragma": "no-cache",
                "Sec-Fetch-Site": "same-origin",
                "Origin": Cypress.config().baseUrl,
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
                "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36",
                //'Sec-Fetch-Mode': 'cors',
                "Accept": "application/json, text/plain, */*",
                "Cache-Control": "no-cache",
                "Referer": Cypress.config().baseUrl,
                "Connection": "keep-alive",
            }
        })
    },
    cancelarHabilitacao(id) {
        cy.log('cancelarHabilitacao', id)
        return cy.request({
            method: 'POST',
            url: `rest/habilitacao/${id}/mover-com-anexo`,
            headers: {
                "Pragma": "no-cache",
                "Sec-Fetch-Site": "same-origin",
                "Origin": Cypress.config().baseUrl,
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
                "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36",
                "Accept": "application/json, text/plain, */*",
                "Cache-Control": "no-cache",
                "Connection": "keep-alive",
                "Referer": Cypress.config().baseUrl,

                "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryN7llBbBfOVwjLEcC",
            },
            body: '------WebKitFormBoundaryN7llBbBfOVwjLEcC\r\nContent-Disposition: form-data; name="anexo"; filename="Declaração e Autorização de consulta ao SCR - 07790382000143 (3).pdf"\r\nContent-Type: application/pdf\r\n\r\n\r\n------WebKitFormBoundaryN7llBbBfOVwjLEcC\r\nContent-Disposition: form-data; name="transicoes"\r\n\r\n{"transicao":{"idTransicao":406,"nomeTransicao":"Cancelar","estadoDestino":"prc.estado.cancelado","comentario":"testes","enviarEmail":false,"responsavelEstadoDestino":"N"},"dataDevolucao":"2019-10-08T03:00:00.000Z","transicoesBlocos":{}}\r\n------WebKitFormBoundaryN7llBbBfOVwjLEcC--\r\n'
        })
            .then((resp) => {
                console.debug('response', resp);
            })
    },
    excluir(id) {
        cy.log('excluirProcesso', id)
        const url = `rest/habilitacao/${id}`;
        return HttpHelper.delete(
            url,
            {
                // "Content-Type": "application/x-www-form-urlencoded",
                'Content-Type': 'application/json'
            }
        )
    },
    iniciarNovaHabilitacao() {
        cy.log('inicio nova habilitação')

        cy.server()
        cy.route('**/rest/conta-empresa/verificada').as('contaVerificada')
        cy.route('**/rest/habilitacao/status').as('statusHabilitacao')
        cy.route('**/rest/atualizacao-cadastral/status').as('statusAtualizacaoCadastral')

        cy.visit('/#/cadastro/pessoa-juridica')

        cy.wait(['@contaVerificada', '@statusHabilitacao', '@statusAtualizacaoCadastral'])

        SpinnerHelper.aguardarSpinnerDesaparecer()

        cy.get('h3')
            .should('have.text', 'Habilitação / Análise Cadastral')

        cy.server()
        // cy.route('**/rest/grupo-economico?*', 'fixture:habilitacoes/grupo-economico-00623904000173.json')
        cy.route('**/rest/grupo-economico?*')
            .as('grupoEconomico')

        cy.get('[data-testid=iniciarHabilitacao], [data-testid=habilitacao]')
            .click({force: true})

    },
    concordoComOsIndicadores() {
        cy.log('concordo com os indicadores')
        SpinnerHelper.aguardarSpinnerDesaparecer()
        FormHelper.preencherCampo('concordoComOsIndicadores', true)

        cy.get('continuar')
            .click({force: true})
    },
    aceitoGrupoEconomicoSugerido() {
        cy.log('aceito grupo econômico sugerido')
        cy.wait('@grupoEconomico')

        cy.route('**/rest/habilitacao/*/roteiro')
            .as('obterRoteiro')
        cy.route('**//rest/roteiro/fichas-cadastrais*')
            .as('criarFichas')

        cy.contains('button', 'Continuar')
            .click()

        cy.wait(['@obterRoteiro','@criarFichas'])

        HabilitacaoHelper.estouNaTelaDeHabilitacao()
    },
    estouNaTelaDeHabilitacao() {
        cy.url().should('contain', '/#/formulario/habilitacao/')
        cy.get('titulo-processo').should('contain', 'Informações para Análise Cadastral, Jurídica e de Crédito')
    }
}

// curl 'http://localhost:4204/rest/habilitacao/1180/mover-com-anexo' 
/*
'Pragma: no-cache' \n 'Sec-Fetch-Site: same-origin' 
'Origin: http://localhost:4204'


'Accept-Encoding: gzip, deflate, br'
'Accept-Language: pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7'
'User-Agent: Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36'
'Sec-Fetch-Mode: cors'
'Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryN7llBbBfOVwjLEcC'
*/
// 'Accept: application/json, text/plain, */*'
/*
'Cache-Control: no-cache'
'Referer: http://localhost:4204/'
'Cookie: _ga=GA1.1.1426378163.1570556549; _gid=GA1.1.1023304693.1571061681; IEW_CTRL=366473808; LtpaToken2=tC+UI/B0uKglsdspfCJPOS7RrQgsDCmT95sh9pzVJWPGTrC3vyKEox4ylnLO/2z9W2SifZ2RC94o/RNLWK2S5JWD45cYNvHQOcucGbEhHN2SBMf7VeQjZaXWmTFPCJBg4ygLslDDXx0rcTrFT/MPy1cpGp9fVgE9Id9VyGcxevT0HKyZgu9cnKcwf3KzrA253iPK2TYN9u9Qa9CXhY7e6KyHcUgthCVQ/hIUie6xP49LiKHaW5y1cq5iZkYMziJvWDzpAx20F6Y7jZLtND/+efLMeWTeHT0UdQR57z1qCY5IyS2sbgWeDR3ms3MABqW0G6k+dFTG1NJDA7fl8d3RDjPO8MfjW9qGPIthOmZtabQ='
'Connection: keep-alive' --data-binary
$'------WebKitFormBoundaryN7llBbBfOVwjLEcC\r\nContent-Disposition: form-data; name="anexo"; filename="Declaração e Autorização de consulta ao SCR - 07790382000143 (3).pdf"\r\nContent-Type: application/pdf\r\n\r\n\r\n------WebKitFormBoundaryN7llBbBfOVwjLEcC\r\nContent-Disposition: form-data; name="transicoes"\r\n\r\n{"transicao":{"idTransicao":406,"nomeTransicao":"Cancelar","estadoDestino":"prc.estado.cancelado","comentario":"testes","enviarEmail":false,"responsavelEstadoDestino":"N"},"dataDevolucao":"2019-10-08T03:00:00.000Z","transicoesBlocos":{}}\r\n------WebKitFormBoundaryN7llBbBfOVwjLEcC--\r\n' --compressed
*/
