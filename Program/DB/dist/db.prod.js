"use strict";var mysql=require("mysql"),config=require("../config.json");global.db=db,global.consulta=consulta;var db=mysql.createConnection({host:config.DB_HOST,user:config.DB_USER,password:config.PASSWORD,database:config.DB_DATABASE});function consulta(e,t){var r;return regeneratorRuntime.async(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(new Promise(function(r,o){db.query(e,t,function(n,e){n?o(n):r(e)})}));case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}})}db.connect(function(n){if(n)throw n;console.log("Connected to mysq!")});