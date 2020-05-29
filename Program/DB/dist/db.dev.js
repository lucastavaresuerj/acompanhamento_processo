"use strict";

var mysql = require('mysql');

var config = require('../config.json');

global.db = db;
global.consulta = consulta;
var db = mysql.createConnection({
  host: config.DB_HOST,
  user: config.DB_USER,
  password: config.PASSWORD,
  database: config.DB_DATABASE
});
db.connect(function (err) {
  if (err) throw err;
  console.log("Connected to mysq!");
});

function consulta(sql, value) {
  var result;
  return regeneratorRuntime.async(function consulta$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(new Promise(function (resolve, reject) {
            db.query(sql, value, function (err, results) {
              if (err) {
                reject(err);
              } else {
                resolve(results);
              }
            });
          }));

        case 2:
          result = _context.sent;
          return _context.abrupt("return", result);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}