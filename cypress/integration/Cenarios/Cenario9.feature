# language: pt

Funcionalidade: Verificar se o cnpj informado é válido

Contexto:
    Dado que estou autenticado como cliente externo
    E clico no icone de financiamentos
    E vejo a tela de financiamento
    E clico no botão de solicitar financiamento

#@focus
Cenário: Deve informar que o cnpj é inválido
    Dado que vejo o formulário de pedido de financiamento
    E preencho o cnpj com valor inválido
    Então vejo a mensagem de valor inválido