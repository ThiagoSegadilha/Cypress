# language: pt
@fast
Funcionalidade: Deve abrir uma solicitação "Concluído"
  Como usuário do sistema
  Preciso verificar se não há nenhum campo habilitado
  Preciso checar se há historico na tela

  Contexto:
    Dado que estou autenticado como cliente externo
    E clico no icone de financiamentos
    E vejo a tela de financiamento

  @focus
  Cenário: deve verificar se há histórico e se o formulário esta desabilitado para solicitações concluidas
    Dado que abri uma solicitação concluida
    E verifico se o formulário esta desabilitado
    E se existe histórico