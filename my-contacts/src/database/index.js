const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'mycontacts',
});

client.connect();

exports.makeQuery = async (query, data) => {
  const { rows } = await client.query(query, data);

  return rows;
};
