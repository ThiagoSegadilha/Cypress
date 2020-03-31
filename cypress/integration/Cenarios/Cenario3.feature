# language: pt
@fast
Funcionalidade: Verificar se a soma dos valores está acima de 10 milhões Somatório dos valores de cada cnpj
  Como usuário do sistema
  Preciso inserir os cnpj's e seus valores
  Preciso checar a mesagem após preencher tudo

  Contexto:
    Dado que estou autenticado como cliente externo
    E clico no icone de financiamentos
    E vejo a tela de financiamento
    E clico no botão de solicitar financiamento

  @focus
  Cenário: deve verificar se a soma dos valores está acima de 10 milhões Somatório dos valores de cada cnpj
    Dado que crio 2 clientes
    E preencho os 2 clientes
    Então verifico a mensagem confirmando o valor acima de 10 milhões

    #    @focus
  Cenário: deve verificar se a soma dos valores está abaixo de 10 milhões Somatório dos valores de cada cnpj
    Dado que preencho 3 clientes diferentes
    Então verifico a mensagem confirmando o valor abaixo de 10 milhões