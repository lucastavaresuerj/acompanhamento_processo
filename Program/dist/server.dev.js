"use strict";

require('./DB/db');

var express = require('express');

var path = require('path');

var config = require('./config.json');

var _require = require('./rotas/processos'),
    routerProcessos = _require.routerProcessos;

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express["static"](path.join(__dirname, 'views/dist')));
app.listen(config.API_PORT, function () {
  console.log('Server running on port ' + config.API_PORT + '...');
});
app.all('/lista_de_processos', routerProcessos);