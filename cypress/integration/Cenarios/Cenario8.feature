# language: pt
@fast
Funcionalidade: Deve abrir uma solicitação de financiamento e não permitir informar CNPJ que não seja matriz
  Como usuário do sistema
  Preciso verificar se não é possivel permitir informar CNPJ que não seja matriz
  Preciso checar a mensagem de erro após salvar

  Contexto:
    Dado que estou autenticado como cliente externo
    E clico no icone de financiamentos
    E vejo a tela de financiamento
    E clico no botão de solicitar financiamento

  @focus
  Cenário: deve verificar se há mensagem de erro após informar CNPJ que não seja matriz e salvar
    Dado que preenchi o formulario do cliente com um CNPJ que não seja matriz
    E clico no botão salvar
    Então vejo a mensagem de erro