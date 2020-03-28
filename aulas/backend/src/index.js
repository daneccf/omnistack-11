const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
Metodos HTTP:

GET: buscar uma informacao do back-end
POST: criar uma informacao no back-end
PUT: alterar uma informacao no back-end
DELETE: deletar uma informacao no back-end
*/

/**
 * Tipos de parametros:
 * 
 * Query Params: parametros nomeados enviados na rota apos "?" (filtros, paginacao)
 * Route Params: parametros utilizados para identificar recursos
 * Request Body: corpo da requisicao, utilizado para criar ou alterar recursos
 */


/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle...
 * NoSQL: MongoDB, CouchDB, etc
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  */


app.listen(3333);
