import express from 'express';

const app = express();

app.use(express.json());

/*
    request = get, post, put, delete....
    response = retorna os dados.
    
    Corpo (Request Body): Dados para a criação ou atualização de um registro
    Route Params: Identificar qual recurso eu quero atualizar ou deletar
    Query Params: Paginação, filtro, ordenaçao
*/
app.get('/', (request, response) => {
  return response.json({ "hello": "world" });
});

// localhost:3333
app.listen(3333);
