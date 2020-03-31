# language: pt

Funcionalidade: Verificar a obrigatoriedade de cada campo na tela de financiamento para envio da solicitação.


Contexto:
    Dado que estou autenticado como cliente externo
    E clico no icone de financiamentos
    E vejo a tela de financiamento
    E clico no botão de solicitar financiamento
    

Cenário: Deve preencher o formulário e os campos estarem válidos
    Dado vejo o formulário de pedido de financiamento
    E preencho todos os campos
    E clico no botão salvar
#   Então vejo botão de enviar habilitado

Cenário: Botão enviar deve estar desabilitado se cnpj não for informado

    Dado preencho todos os campos
    E clico no botão salvar
    E limpo o campo cnpj
    E clico no botão salvar
#   Então vejo botão de enviar desabilitado
    E vejo a mensagem de campo inválido

Cenário: Botão enviar deve estar desabilitado se valor for menor que 10 milhões

    Dado preencho todos os campos
    E clico no botão salvar
    E altero o valor para abaixo de 10 milhões
    E clico no botão salvar
#   Então vejo botão de enviar desabilitado
    E vejo a mensagem de valor mínimo

Cenário: Botão enviar deve estar desabilitado se valor não for informado

    Dado preencho todos os campos
    E clico no botão salvar
    E limpo o campo valor
    E clico no botão salvar
#   Então vejo botão de enviar desabilitado
    E vejo a mensagem de campo inválido