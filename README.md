# App

GymPass style app

## Requisitos Funcionais

[x] Deve ser possivel se cadastrar
[x] Deve ser possivel se autenticar
[] Deve ser possivel obter o perfil de usuario logado
[] Deve ser possivel atualizar o perfil de usuario logado
[] Deve ser possivel obter o numero de check-ins realizados pelo usuario logado
[] Deve ser possivel o usuario obter seu historico de check-ins
[] Deve ser possivel o usuario buscar academias proximas
[] Deve ser possivel o usuario se deslogar
[] Deve ser  possivel usuario buscar academias pelo nome
[] Deve ser possivel o usuario realizar check-in em uma academia
[] Deve ser possivel o usuario validar check-in de um usuario
[] Deve ser possivel cadastrar uma academia


## Regras de Negócio
[x] Um usuário não pode se cadastrar com um e-mail já utilizado(duplicado)
[] Um usuário não pode realizar  2 check-in no mesmo dia
[] Um usuário não pode realizar check-in se nao tiver perto da academia(100ms)
[] o check-in so pode ser validado ate 20 minutos depois de realizado
[] o check-in so pode ser validado por administradores
[] a academia so pode ser cadastrada por um administrador

## Requisitos Não Funcionais
[x] a senha do usuario deve ser criptografada
[x] os dados da aplicaçao precisam estar persistidos em um banco de dados pos-greSQL
[] todas as listas de dados precisam ser paginadas com 20 itens por pagina
[] o usuario deve ser identificado por um JWT

## Tech Stack

- Node.js
- Express
- MongoDB
- React