# language: pt

Funcionalidade: Verificar a obrigatoriedade de cada campo na tela de financiamento para envio da solicitação.


Contexto:
    Dado que logo como cliente externo
    E clico no icone de financiamentos
    E vejo a tela de financiamento
    E clico no botão para solicitar um financiamento
    Então vejo o formulário de pedido de financiamento

Cenário: Deve preencher o formulário e os campos estarem válidos
    Dado vejo o formulário de pedido de financiamento
    E preencho todos os campos
    E clico no botão salvar
    Então vejo botão de enviar habilitado
