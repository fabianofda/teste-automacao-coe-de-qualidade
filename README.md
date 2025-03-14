## Sobre

Repositório teste-automacao-coe-de-qualidade e2e

## Stacks
- Cypress
- Javascript

## Rodando

1. Clonar o repositório, instalar as dependências
```
npm install
```

2. Subir o Cypress UI
```
npx cypress open 
```

3. Executar testes em Headless
```
npx cypress run 
```


---

![Alt Text](image/roadmap.png)



<p align="center">
  <h4>Testes do projeto</h4>
  <a href="BDD.md">
    <img src="image/bdd.png" alt="Alt Text" />
  </a>
</p>


# Projeto: Automação de Testes E2E com Cypress

## Sobre
Repositório dedicado à automação de testes E2E para garantir a qualidade do site Automation Practice.

Este caso de Teste E2E tem como objetivo verificar as funcionalidades e garantir a qualidade do site Automation Practice. Destina-se a validar os cenários dentro do sistema, assegurando que ele funcione conforme o esperado, atenda aos requisitos e proporcione uma experiência confiável aos usuários.

<span style="color:red">Desafio Web - Deve Logar, Buscar Produto, Incluir no Carrinho e Validar na sessão de  Pagamento<br>

> <i><span style="color:blue">Dado</i> que acessei a área logada<br>
  <i><span style="color:blue">Quando</i> realizo a busca por produto "Blouse"<br>
  <i><span style="color:blue">E</i> adiciono ao carrinho<br>
  <i><span style="color:blue">Entao</i> vejo os itens na sessão de pagamentos

<span style="color:red">Desafio API - Deve validar o conteúdo da chave list:<br>
> <i><span style="color:blue">Dado</i> que envio um "GET" para API Trello<br>
  <i><span style="color:blue">Quando</i> requisição é processada corretamente<br>
  <i><span style="color:blue">Entao</i> visualizo status code "200" e o resultado no corpo da requisição.


## Tecnologias Utilizadas
> 🎯 Cypress<br>
> 🎟️ Javascript


## Instruções de Execução

1. Clonar o repositório, instalar as dependências
```
npm install
```

2. Executar testes em UI
```
npx cypress open 
```

3. Executar testes em Headless
```
npx cypress run 
```

