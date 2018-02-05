# Repositório do Github
- https://github.com/robsonalvesbh/cpf-blacklist-node

# Docker
## Executando a aplicação
- Navegue até a pasta do projeto e execute o comando `docker-compose up --build`, o docker irá construir a imagem do projeto, criar e executar o container.
- O projeto estará disponível na seguinte url: http://127.0.0.1:3000/

## Comandos adicionais

Para poder executar os comandos adicionais é necessário acessar o container, para isso execute o seguinte comando no terminal:

    docker exec -it node_app bash

### Linter
- Execute o comando `npm run lint` para executar o linter em todo o código

### Gulp
- Execute o comando `npm run gulp` para executar o gulp na pasta `assets` e gerar os arquivos da pasta `dist`.

### Tests
  - Execute o comando `npm run test` para os testes.

# Dependências utilizadas

## Infraestrutura
- docker-ce stable
- docker-compose

## Backend
- Node 8: JavaScript runtime
- Express: Framework web
- Body-parser: Disponibiliza os dados da request em req.body
- Node-cpf-cnpj: Manipulação e validação de CPF
- Sequelize: ORM
- Moment: Manipulação e data e hora
- Nodemon: Reload automático
- Sqlite3: Drive de database

## Front-end
- Pug: Template Enginer
- Bootstrap: Framework web
- jQuery: Biblioteca JavaScript
- jQuery Mask: Plugin de máscara jQuery
- Sweetalert: Biblioteca JavaScript
- Gulp: JS Task Runner
  - Event-stream: Mescla processos
  - Gulp-concat: Concatenar arquivos
  - Gulp-minify: Minifica o código

## Tests
- Mocha: JavaScript test framework
- Chai: Biblioteca de asserção
- Chai-http: Testes de integração HTTP

# Boas práticas
- ESLint: Ferramenta para identificar e relatar os padrões encontrados no código ECMAScript.

# Padrão de código:
- Javascript standard com ESLINT

# IDEs e editores de texto:
- Visual Studio Code

# Aplicação web

Foram criadas duas páginas para que o usuário possa interagir com a aplicação e utilizar os principais recursos através de uma interface web simples.

## URLs disponíveis

  - http://127.0.0.1:3000/ - Nesta página usuário pode consultar, adicionar e remover um CPF da blacklist, além de ver todos os CPFs que estão na blacklist.

  - http://127.0.0.1:3000/status - Esta página conta com algumas informações relevantes sobre a aplicação, nela é possível ver o uptime (Tempo que a aplicação está disponível), consumo de memória, quantidade de consultas realizadas no Banco de dados e quantidade de CPFs que estão na blacklist.


# Documentação da API

## Endpoint

  http://127.0.0.1:3000/api/v1

## Requisições

### - Consulta CPF

Esta requisição retorna se o CPF se o está ou não na blacklist:

  - **FREE**: Não está na blacklist
  - **BLOCK**: Está na blacklist

#### Método HTTP

    GET

#### URL

    /cpf/{cpf}

#### Parâmetros

    {cpf} - CPF que deseja consultar

O CPF pode ser enviado com ou sem formatação.

#### Retorno

````json
  {
    "cpf": "FREE"
  }
````

### - Adiciona CPF a blacklist

Esta requisição adiciona o CPF informado a blacklist.

#### Método HTTP
    POST

#### URL

    /cpf

#### Parâmetros

    {cpf} - CPF que deseja adicionar a blacklist

O parâmetro desta requisição deve ser enviado utilizando o formato `JSON`, veja o exemplo abaixo:

````json
  {
    "cpf": "12345678909"
  }
````

O CPF pode ser enviado com ou sem formatação.

#### Retorno

````json
  {
    "msg": "CPF incluído com sucesso na blacklist"
  }
````

### - Remove CPF da blacklist

Esta requisição remove o CPF informado da blacklist.

#### Método HTTP
    DELETE

#### URL

    /cpf/{cpf}

#### Parâmetros

    {cpf} - CPF que deseja remove da blacklist

O CPF pode ser enviado com ou sem formatação.

#### Retorno

````json
  {
    "msg": "CPF removido com sucesso da blacklist"
  }
````

### - Retorna todos os CPFs que estão na blacklist.

Esta requisição retorna todos o CPFs que estão na blacklist.

#### Método HTTP

    GET

#### URL

    /cpf

#### Retorno

````json
  {
    "cpf": [
        {
            "cpf": "092.302.930-29",
            "createdAt": "03/02/2018"
        }
    ]
  }
````

### - Status da aplicação

Esta requisição retorna algumas informações da aplicação, como:

 - Uptime (Tempo que a aplicação está diponível)
 - Memória utilizada
 - Quantidade de Queries executadas
 - Quantidade de CPFs na blacklist

#### Método HTTP

    GET

#### URL

    /status

#### Retorno

````json
  {
      "uptime": "0 horas 3 minutes e 27 segundos",
      "memoryUsed": {
          "total": "21.39 MB",
          "used": "18.33 MB"
      },
      "queriesExecuted": 26,
      "cpfOnBlacklist": 3
  }
````
