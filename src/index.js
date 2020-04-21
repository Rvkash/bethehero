const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();

app.use(cors());

app.use(express.json())
app.use(routes);

/*GET, Buscar informação do backend
POST,  Criar uma informação no backend
PUT,   alterar uma informação no backend
DELETE deletar uma informação no backend

QUERY PARAMS: enviado na rota apos ? ( filtros e paginação )
ROUTE PARAMS: utilizados para identificar recursos
REQUEST BODY: corpo da requisição identificar recursos 

SQL: Mysql, postgres, Oracle etc..
NOSQL:  mongodb, Couchdb...

*/


app.listen(3333);