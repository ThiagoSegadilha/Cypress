# language: pt
@fast
Funcionalidade: Login
  Como usuário do sistema
  Para utilizar os recursos aos quais tenho acesso
  Preciso me identificar

  Contexto:
    Dado que estou na página de login
    E não vejo o recaptcha

#    @focus
  Cenário: deve fazer login como usuário externo, com cnpj
    Dado que sou um usuário externo
    Quando preencho as informações de login
    E tento entrar no sistema
    Então vejo o nome do usuário logado no cabeçalho

#    @focus
  @dsv
  Cenário: deve fazer login como usuário interno, sem cnpj
    Dado que sou um usuário master interno
    Quando preencho as informações de login
    E tento entrar no sistema
    Então vejo o nome do usuário logado no cabeçalho

#    @focus
  Cenário: deve exibir recaptcha após errar a senha repetidas vezes
    Dado que sou um usuário externo
    E já errei a senha diversas vezes

    Quando preencho as informações de login
    E informo a senha errada
    E tento entrar no sistema

    Então vejo o recaptcha
