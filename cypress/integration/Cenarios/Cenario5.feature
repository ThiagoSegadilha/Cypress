# language: pt

Funcionalidade: Verificar se todos os campos estão habilitados e o botão salvar desabilitado para uma solicitação em "Rascunho". 

Contexto:
    Dado que estou autenticado como cliente externo
#    E excluo o processo da habilitação
    E clico no icone de financiamentos
    E vejo a tela de financiamento
    E clico no botão de solicitar financiamento

#@focus   
Cenário: Deve verificar todos os campos para ver se estão habilitados
    Dado que vejo o formulário de pedido de financiamento
    E verifico disponibilidade de cada campo

#@focus
Cenário: O botão salvar deve estar desabilitado e só habilitar quando tiver qualquer mudança no formulário.
    Dado que vejo o formulário de pedido de financiamento
    E verifico se botão salvar está desabilitado
    E preencho algum campo
    Então vejo botão salvar habilitado