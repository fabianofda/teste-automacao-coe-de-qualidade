Os casos de teste planejados têm como finalidade testar as funcionalidades e garantir a qualidade do site automationpractice. Cada caso de teste específico se destina a verificar um cenário particular dentro do sistema, e a finalidade geral dos testes é garantir que o software funcione conforme o esperado, cumprindo os requisitos de negócios e fornecendo uma experiência confiável aos usuários.

## Testes WEB

## Cart
Os testes nesse conjunto verificam produtos inclusos na sessao de pagamentos.

- ### Deve validar compras inclusas no carrinho
    - Dado que estou logado
    - Quando incluo compras no carrinho
    - Entao vejo os items na sessao de pagamentos

## Login
Os testes nesse conjunto verificam a funcionalidade de login.

- ### Deve realizar login com sucesso
    - Dado que acesso a area de login do sistema
    - Quando submento as credenciais validas
    - Entao vejo a área logada.

- ### Deve deslogar com sucesso
    - Dado que estou logado no sistema
    - Quando me deslogo
    - Entao O usuário é deslogado e retorna para pagina principal do sistema.

- ### Não deve logar com credenciais invalidas
    - Dado que acesso a area de login do sistema
    - Quando submento as credenciais invalidas
    - Entao Uma mensagem de erro deve ser exibida, "Invalid email address."

- ### Não deve logar com credencial inexistente
    - Dado que acesso a area de login do sistema
    - Quando submento as credencial inexistente
    - Entao Uma mensagem de erro deve ser exibida, "Authentication failed"

- ### Não deve logar quando email nao for preenchido
    - Dado que acesso a area de login do sistema
    - Quando submento sem informar um email
    - Entao Uma mensagem de erro deve ser exibida, "An email address required."

- ### Não deve logar quando senha nao for preenchido
    - Dado que acesso a area de login do sistema
    - Quando submento sem informar a senha
    - Entao Uma mensagem de erro deve ser exibida, "Password is required."

## Products
Os testes nesse conjunto verificam a funcionalidade de inclusão de compras no carrinho.

- ### Deve incluir um produto no carrinho
    - Dado que estou logado
    - Quando subimento os produtos
    - Entao vejo os items no carrinho

## Search
Os testes nesse conjunto verificam a funcionalidade busca de produtos.

- ### Deve validar a buscar sem informar o produto
    - Dado que estou logado
    - Quando realizo uma busca sem informar o produto
    - Entao Uma mensagem de erro deve ser exibida, "Please enter a search keyword"

- ### Deve validar a buscar informando um produto inexistente
    - Dado que estou logado
    - Quando realizo uma busca informando um produto inexistente
    - Entao Uma mensagem de erro deve ser exibida, "No results were found for your search "<produto>""

- ### Deve realizar buscar de um produto específico
    - Dado que estou logado
    - Quando realizo uma busca de um produto específico
    - Entao a busco do "<produto>" é realizada com sucesso


## Teste API

## GET
O teste deste conjuto tem como finalidade a 'Validação da resposta da API Trello'

- ### Deve validar o conteúdo da chave list
  Dado que envio um get para o <endpoint> da API Trello
  Quando a requisao é processada com sucesso
  Entao recebo status code OK e body com resultado da requisiao.
