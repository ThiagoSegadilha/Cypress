# language: pt

Funcionalidade: Verificar a obrigatoriedade de cada campo na tela de financiamento para envio da solicitação.

Contexto:
    Dado que estou autenticado como cliente externo
    E clico no icone de financiamentos
    E vejo a tela de financiamento
    E clico no botão de solicitar financiamento
    
@focus
Cenário: Deve preencher o formulário e os campos estarem válidos
    Dado vejo o formulário de pedido de financiamento
    E preencho todos os campos
    E clico no botão salvar
#   Então vejo botão de enviar habilitado

#@focus
Cenário: Botão enviar deve estar desabilitado se cnpj não for informado

    Dado preencho todos os campos
    E clico no botão salvar
    E limpo o campo cnpj
    E clico no botão salvar
#   Então vejo botão de enviar desabilitado
    E vejo a mensagem de campo inválido

#@focus
Cenário: Botão enviar deve estar desabilitado se valor for menor que 10 milhões

    Dado preencho todos os campos
    E clico no botão salvar
    E altero o valor para abaixo de 10 milhões
    E clico no botão salvar
#   Então vejo botão de enviar desabilitado
    E vejo a mensagem de valor mínimo

#@focus
Cenário: Botão enviar deve estar desabilitado se valor não for informado

    Dado preencho todos os campos
    E clico no botão salvar
    E limpo o campo valor
    E clico no botão salvar
#   Então vejo botão de enviar desabilitado
    E vejo a mensagem de campo inválido

#@focus
Cenário: Botão enviar deve estar desabilitado se quantidade de empregos antes não for informada

    Dado preencho todos os campos
    E clico no botão salvar
    E limpo o campo empregos antes
    E clico no botão salvar
#   Então vejo botão de enviar desabilitado
    E vejo a mensagem de campo inválido

#@focus
Cenário: Botão enviar deve estar desabilitado se quantidade de empregos durante não for informada

    Dado preencho todos os campos
    E clico no botão salvar
    E limpo o campo empregos durante
    E clico no botão salvar
#   Então vejo botão de enviar desabilitado
    E vejo a mensagem de campo inválido

#@focus
Cenário: Botão enviar deve estar desabilitado se quantidade de empregos depois não for informada

    Dado preencho todos os campos
    E clico no botão salvar
    E limpo o campo empregos depois
    E clico no botão salvar
#   Então vejo botão de enviar desabilitado
    E vejo a mensagem de campo inválido

#@focus
Cenário: Botão enviar deve estar desabilitado se informação sobre possível licença ambiental não for informada

    Dado não informo sobre possível licença ambiental
    E clico no botão salvar
#   Então vejo botão de enviar desabilitado
####    E vejo a mensagem de campo inválido

#@focus
Cenário: Botão enviar deve estar desabilitado se descrição de garantia não for informada

    Dado preencho todos os campos
    E clico no botão salvar
    E limpo o campo descrição garantias
    E clico no botão salvar
#   Então vejo botão de enviar desabilitado
    E vejo a mensagem de campo inválido
