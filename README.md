# Pipetech Challenge

### Challenge for a Full-Stack Developer position at Pipetech

This was developed using the stack PERN(PostgreSQL, Express, React, Node) on a Linux computer running the [Pop_OS!](https://pop.system76.com/) distro.

### About the Project

This software contains a Student CRUD(Create, Read, Update, Delete).

The student can only have one CPF(Cadastro de Pessoa Física), one full name and one email with the minimum of 11 characters.
The CPF is saved only with numbers. and the name can be at least 2 and maximum 200. The email can be at least 2 and maximum 200 and the student ID is auto generated using the PostgreSQL Serial.

### Requirements:

- [Nodejs](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/) (on local machine running on port 5432)
- [Npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

## Running project:

#### Creating database

1 - Check if your PostgreSQL is running on your computer

```sh
ss -tulpn | grep 5432
service postgresql status
```

2 - Run ./server/database.sql on your Postgre Database

#### Serving App

```sh
git clone https://gitlab.com/HenriqueCoelho1/developer-code-challenge.git
cd developer-code-challenge
cd client
npm i
npm start
```

On your server folder edit the project initialization, go to the package.json and change:

```json
"scripts": {
    "start": "nodemon run server.js"
},
```

And then in your root folder we need to install all the dependencies on server folder:

```sh
cd server
npm i
npm start
```

## server/.env config file

```sh
PORT =
ROOT =
PASSWORD =
HOST =
PORT_POSTGRE =
DATABASE =
```

### Happy hacking!

### Made with ♥ by [HenriqueCoelho1](https://br.linkedin.com/in/alleson-henrique-coelho-barbosa-19151a213)
