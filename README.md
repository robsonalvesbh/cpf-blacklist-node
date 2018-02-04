# Repositório do Github
- https://github.com/robsonalvesbh/cpf-blacklist-node

# Docker
## Execução
- Navegue até a pasta do projeto e execute o comando `docker-compose up`, o docker irá construir a imagem do projeto e criar e executar o container.
- O projeto estará disponível na seguinte url: http://127.0.0.1:3000/

# Dependências utilizadas

## Infraestrutura
- docker-ce stable
- docker-compose

## Backend
- Node 8: JavaScript runtime
- Express: Framework web
- Body-parser: Disponibiliza os dados da request em req.body
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

# Comandos adicionais
## Linter
- Execute o comando `npm run lint` para executar o linter em todo o código

## Gulp
- Execute o comando `npm run gulp` para executar o gulp na pasta `assets` e gerar os arquivos da pasta `dist`.

## Tests
  - Execute o comando `npm run test` para os testes.

# Documentação da API

## Endpoint

  http://127.0.0.1:3000/api/v1

## Requisições

### - Consulta CPF

Está requisição retorna se o CPF se o está ou não na blacklist:

  - FREE: Não está na blacklist
  - BLOCK: Está na blacklist

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

Está requisição adiciona o CPF informado a blacklist.

#### Método HTTP
    POST

#### URL

    /cpf

#### Parâmetros

    {cpf} - CPF que deseja adicionar a blacklist

Os parâmetros desta requisição deve ser enviado utilizando o formato `JSON`, veja o exemplo abaixo:

````json
  {
    "cpf": "12345678909"
  }
````

O CPF pode ser enviado com ou sem formatação.

#### Retorno

````json
  {
    "msg": "CPF incluido com sucesso na blacklist"
  }
````

### - Remove CPF da blacklist

Está requisição remove o CPF informado da blacklist.

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
    "msg": "CPF removido com sucesso na blacklist"
  }
````

### - Retorna todos os CPFs que estão na blacklist.

Está requisição retorna todos o CPFs que estam na blacklist.

#### Método HTTP

    GET

#### URL

    /cpf

#### Retorno

````json
  {
    "cpf": [
        {
            "id": 2,
            "cpf": "092.302.930-29",
            "createdAt": "2018-02-03T21:20:52.889Z",
            "updatedAt": "2018-02-03T21:20:52.889Z"
        }
    ]
  }
````

### - Status da aplicação

Está requisição retorna algumas informações da aplicação, como:

 - Uptime (Tempo que a aplicação está diponível)
 - Memória utilizada
 - Quantidade de Queries executadas
 - Quantidade de CPFs ná Blacklist

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
