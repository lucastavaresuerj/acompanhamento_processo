"use strict";function cardProcess(){var r;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,regeneratorRuntime.awrap(consulta(" select P.Nome, P.ID, P.Data_Inicio, P.`Status`, count(P.ID) as numDocs from Processos P, Processos_Documentos PD where P.ID = PD.Processos_ID group by P.ID"));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}})}function documentsProcess(e){}function addDocumentProcess(e,r){}module.exports={cardProcess:cardProcess};