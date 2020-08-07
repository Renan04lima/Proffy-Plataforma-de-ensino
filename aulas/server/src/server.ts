import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

/*
    request = get, post, put, delete....
    response = retorna os dados.
    
    Corpo (Request Body): Dados para a criação ou atualização de um registro
    Route Params: Identificar qual recurso eu quero atualizar ou deletar
    Query Params: Paginação, filtro, ordenaçao
*/

app.use(routes);
// localhost:3333
app.listen(3333);
