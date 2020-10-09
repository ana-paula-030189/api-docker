const express = require('express');
const app = express();
const database = require('./database')
require('dotenv').config();


app.get('/', async function(req, response) {
    response.send('status ok');
});

app.get('/consulta', async function(req, response) {
         var res = await database.queryDatabase()
         response.send(res);
});

app.listen(process.env.PORT ||  5000, function() {
    console.log('Listening on port: ' + process.env.PORT);
})