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

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected to mysq!");
});


async function consulta(sql, value){
  var result = await new Promise( (resolve, reject) => { 
    db.query(sql,value, (err, results) => {
      if (err) {
        reject(err)
      } else {
        resolve(results);
      }
    }
  )})
  return result;
}