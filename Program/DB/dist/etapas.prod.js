"use strict";function totalDocumentos(){var e;return regeneratorRuntime.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,regeneratorRuntime.awrap(consulta(" select count(ID) as total from Documentos_Etapas"));case 3:return e=t.sent,t.abrupt("return",e);case 5:case"end":return t.stop()}})}module.exports={totalDocumentos:totalDocumentos};