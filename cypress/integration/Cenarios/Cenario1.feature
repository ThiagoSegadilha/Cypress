# language: pt

Funcionalidade: Clicar no ícone de financiamentos e poder enviar uma solicitação

Contexto:
    Dado que estou autenticado como cliente externo

Cenário: Deve encontrar a opção de solicitar o financiamento e realizar uma com sucesso
    Dado clico no icone de financiamentos
    E vejo a tela de financiamento
    E clico no botão de solicitar financiamento
    E preencho todos os campos
    E vejo mensagem que formulário está salvo
    E clico no botão enviar
    E preencho o comentário
    Então solicitação deve ser enviada com sucesso