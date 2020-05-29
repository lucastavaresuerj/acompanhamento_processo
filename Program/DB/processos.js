module.exports = {cardProcess}

async function cardProcess(){
    var sql = ' select P.Nome, P.ID, P.Data_Inicio, P.`Status`, count(P.ID) as numDocs'
            + ' from Processos P, Processos_Documentos PD'
            + ' where P.ID = PD.Processos_ID'
            + ' group by P.ID';
    var result = await consulta(sql)
    return result
}

function documentsProcess(idProcess) {
    var sql;
}

function addDocumentProcess(idProcess, nameDoc) {
    var sql;
}

