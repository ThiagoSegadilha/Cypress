# language: pt
@fast
Funcionalidade: Deve abrir uma solicitação "Pendente"
  Como usuário do sistema
  Preciso verificar se todos os campos estão habilitado
  Preciso verificar se o botão salvar está habilitado
  Preciso checar se há historico na tela

  Contexto:
    Dado que estou autenticado como cliente externo
    E clico no icone de financiamentos
    E vejo a tela de financiamento

  @focus
  Cenário: deve verificar se há histórico e se o formulário esta habilitado para solicitações pendentes
    Dado que abri uma solicitação pendente
    E verifico se o formulário está habilitado
    E se o botão salvar está habilitado
    E se existe histórico