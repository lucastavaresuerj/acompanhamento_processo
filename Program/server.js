require('./DB/db')
const express = require('express');
const path =  require('path');
const config = require('./config.json');
const {routerProcessos} = require('./rotas/processos');

var app = express();
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'views/dist')));

app.listen(config.API_PORT, function(){
    console.log('Server running on port ' + config.API_PORT + '...')
})

app.all('/lista_de_processos', routerProcessos);