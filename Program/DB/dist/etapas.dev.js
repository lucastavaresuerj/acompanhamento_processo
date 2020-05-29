"use strict";

module.exports = {
  totalDocumentos: totalDocumentos
};

function totalDocumentos() {
  var sql, result;
  return regeneratorRuntime.async(function totalDocumentos$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          sql = ' select count(ID) as total' + ' from Documentos_Etapas';
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