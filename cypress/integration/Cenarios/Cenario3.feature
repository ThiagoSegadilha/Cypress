# language: pt
@fast
Funcionalidade: Verificar se a soma dos valores está acima de 10 milhões Somatório dos valores de cada cnpj
  Como usuário do sistema
  Preciso inserir os cnpj's e seus valores
  Preciso checar a mesagem após preencher tudo

  Contexto:
    Dado que estou na página de login
    E vejo a tela de financiamento

#    @focus
  Cenário: deve verificar se a soma dos valores está acima de 10 milhões Somatório dos valores de cada cnpj
    Dado que estou autenticado como cliente externo
    Quando clico no icone de financiamentos
    E vejo a tela de financiamento
    E preencho com 3 cnpj diferentes