Rodar o cypress local na máquina de vocês.
Executando cada cenário desses.

Se tiver qualquer dúvida falem comigo.

Cenário 1:
Logar com 
CNPJ: 00.622.416/0001-41
Usuário: teste
Senha: Padaria123

Usuário: teste2
Senha: Padaria123

Clicar no ícone de financiamentos.

Criar uma nova solicitação.

Preencher válido e enviar.

Cenário 2:
Testar a obrigatoriedade de cada campo.
Botão de enviar só pode estar habilitado caso todos os campos estejam preenchidos.

Cenário 3:
Verificar se a soma dos valores está acima de 10 milhões
Somatório dos valores de cada cnpj.
Ou seja, abaixo tem que aparecer mensagem.

Cenário 4:
Abrir uma solicitação "Em análise" (número hard coded mesmo)
Não pode estar habilitado nenhum campo
Não pode estar habilitado salvar nem enviar
Tem que aparecer o histórico lá em cima

Cenário 5:
Abrir uma solicitação "Rascunho" (número hard coded mesmo)
Todos campos tem que estar habilitados
Botão salvar tem que estar habilitado

Cenário 6:
Abrir uma solicitação "Devolvido" (número hard coded mesmo)
Todos campos tem que estar habilitados
Botão salvar tem que estar habilitado
Tem que aparecer o histórico lá em cima

Cenário 7:
Abrir uma solicitação "Concluído" (número hard coded mesmo)
Não pode estar habilitado nenhum campo
Não pode estar habilitado salvar nem enviar
Tem que aparecer o histórico lá em cima

Cenário 8:
Não permitir informar CNPJ que não seja matriz.
Exemplo:91.501.783/0008-19

Cenário 8:
Não permitir informar CNPJ que não seja válido.
Exemplo:91.501.783/1118-88
