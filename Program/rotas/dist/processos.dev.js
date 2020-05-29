"use strict";

var dbProcesso = require('../DB/processos');

var dbEtapas = require('../DB/etapas');

module.exports = {
  routerProcessos: routerProcessos
};

function routerProcessos(req, res) {
  return regeneratorRuntime.async(function routerProcessos$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = req.method;
          _context.next = _context.t0 === 'GET' ? 3 : 13;
          break;

        case 3:
          _context.t1 = res;
          _context.next = 6;
          return regeneratorRuntime.awrap(dbProcesso.cardProcess());

        case 6:
          _context.t2 = _context.sent;
          _context.next = 9;
          return regeneratorRuntime.awrap(dbEtapas.totalDocumentos());

        case 9:
          _context.t3 = _context.sent[0]["total"];
          _context.t4 = {
            title: 'Processos',
            processos: _context.t2,
            TotalDeDocumentos: _context.t3
          };

          _context.t1.render.call(_context.t1, 'Processos_em_Andamento', _context.t4);

          return _context.abrupt("break", 15);

        case 13:
          res.send({
            error: "Method not Abble"
          });
          return _context.abrupt("break", 15);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  });
}