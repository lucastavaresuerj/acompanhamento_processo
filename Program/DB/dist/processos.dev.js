"use strict";

module.exports = {
  cardProcess: cardProcess
};

function cardProcess() {
  var sql, result;
  return regeneratorRuntime.async(function cardProcess$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          sql = ' select P.Nome, P.ID, P.Data_Inicio, P.`Status`, count(P.ID) as numDocs' + ' from Processos P, Processos_Documentos PD' + ' where P.ID = PD.Processos_ID' + ' group by P.ID';
          _context.next = 3;
          return regeneratorRuntime.awrap(consulta(sql));

        case 3:
          result = _context.sent;
          return _context.abrupt("return", result);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}

function documentsProcess(idProcess) {
  var sql;
}

function addDocumentProcess(idProcess, nameDoc) {
  var sql;
}