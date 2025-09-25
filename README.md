# App

GymPass style app

## Requisitos Funcionais

[x] Deve ser possivel se cadastrar
[x] Deve ser possivel se autenticar
[x] Deve ser possivel obter o perfil de usuario logado
[x] Deve ser possivel atualizar o perfil de usuario logado
[x] Deve ser possivel obter o numero de check-ins realizados pelo usuario logado
[x] Deve ser possivel o usuario obter seu historico de check-ins
[x] Deve ser possivel o usuario buscar academias proximas
[x] Deve ser possivel o usuario se deslogar
[x] Deve ser  possivel usuario buscar academias pelo nome
[x] Deve ser possivel o usuario realizar check-in em uma academia
[x] Deve ser possivel o usuario validar check-in de um usuario
[x] Deve ser possivel cadastrar uma academia


## Regras de Negócio
[x] Um usuário não pode se cadastrar com um e-mail já utilizado(duplicado)
[x] Um usuário não pode realizar  2 check-in no mesmo dia
[x] Um usuário não pode realizar check-in se nao tiver perto da academia(100ms)
[x] o check-in so pode ser validado ate 20 minutos depois de realizado
[x] o check-in so pode ser validado por administradores
[x] a academia so pode ser cadastrada por um administrador

## Requisitos Não Funcionais
[x] a senha do usuario deve ser criptografada
[x] os dados da aplicaçao precisam estar persistidos em um banco de dados pos-greSQL
[x] todas as listas de dados precisam ser paginadas com 20 itens por pagina
[x] o usuario deve ser identificado por um JWT

## Tech Stack

- Node.js
- Express
- MongoDB
- React