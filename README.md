# Repositório do Github
- https://github.com/robsonalvesbh/cpf-blacklist-node

# Docker
## Execução
- Navegue até a pasta do projeto e execute o comando `docker-compose build` para contruir a imagem do projeto.
- Ainda na pasta do projeto, execute o comando `docker-compose up` para criar e executar o container.
- O projeto estará disponível na seguinte url: http://127.0.0.1:3000/

# Dependências utilizadas

## Infraestrutura
- docker-ce stable
- docker-compose

## Backend
- Nodejs 8: JavaScript runtime
- ExpressJS: Framework web
- Sequelize: ORM
- Moment: Manipulação e data e hora
- Nodemon: Reload automático
- sqlite3: Drive de database

## Front-end
- Pug: Template Enginer
- Bootstrap: Framework web
- jQuery: Biblioteca JavaScript
- jQuery Mask: Plugin de máscara jQuery
- Sweetalert: Biblioteca JavaScript

## Tests
- Mocha: JavaScript test framework
- Chai: Biblioteca de asserção
- Chai-http: Testes de integração HTTP

## Boas práticas
- ESLint: Ferramenta para identificar e relatar os padrões encontrados no código ECMAScript.

# Padrão de código:
- Javascript standard com ESLINT

# IDEs e editores de texto:
- Visual Studio Code

# Comandos adicionais
## Linter
- Execute o comando `npm run lint` para executar o linter em todo o código

## Tests
- Execute o comando `npm run test` para os testes.
