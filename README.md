<div style="background-image: url('https://www.lambdatest.com/learning-hub/cypress-javascript'); background-size: cover; padding: 20px;">

# Projeto: Automação de Testes E2E com Cypress

## Sobre
Repositório dedicado à automação de testes E2E para garantir a qualidade do site Automation Practice.

Este caso de Teste E2E tem como objetivo verificar as funcionalidades e garantir a qualidade do site Automation Practice. Destina-se a validar os cenários dentro do sistema, assegurando que ele funcione conforme o esperado, atenda aos requisitos e proporcione uma experiência confiável aos usuários.

<span style="color:red">Desafio Web - Deve Logar, Buscar Produto, Incluir no Carrinho e Validar na sessão de Pagamento</span><br>
> <i><span style="color:blue">Dado</span></i> que acessei a área logada<br>
  <i><span style="color:blue">Quando</span></i> realizo a busca por produto "Blouse"<br>
  <i><span style="color:blue">E</span></i> adiciono ao carrinho<br>
  <i><span style="color:blue">Então</span></i> vejo os itens na sessão de pagamentos

<span style="color:red">Desafio API - Deve validar o conteúdo da chave list:</span><br>
> <i><span style="color:blue">Dado</span></i> que envio um "GET" para API Trello<br>
  <i><span style="color:blue">Quando</span></i> requisição é processada corretamente<br>
  <i><span style="color:blue">Então</span></i> visualizo status code "200" e o resultado no corpo da requisição.

## Tecnologias Utilizadas
> 🎯 Cypress<br>
> 🎟️ Javascript

## Instruções de Execução

1. Clonar o repositório e instalar as dependências:
   ```bash
   npm install
