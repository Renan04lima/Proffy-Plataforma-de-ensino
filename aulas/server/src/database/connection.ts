// doc: http://knexjs.org/#Migrations-API

// obs: Criar arquivos da migrations manualmente, se usar typescript, 
// porque o knex cria automaticamente em javascript
import knex from 'knex';
import path from 'path';

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'db.sqlite'),
  },
  useNullAsDefault: true,
});

export default db;