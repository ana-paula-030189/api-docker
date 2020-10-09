const pg = require('pg');
require('dotenv').config();

const config = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
};

const client = new pg.Client(config);

client.connect(err => {   
    if (err) {
        console.log("Erro ao conectar com banco, error:" + err)
        throw err;
    }
});

async function queryDatabase() { 
    try {
        var response = await client.query('SELECT nome, cpf, idade FROM public."Pessoa";');
        return response.rows
    } catch (error) {
       throw error 
    }     
}

module.exports = {queryDatabase}