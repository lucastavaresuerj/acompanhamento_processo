module.exports = {totalDocumentos}

async function totalDocumentos(){
    var sql = ' select count(ID) as total'
            + ' from Documentos_Etapas';
    var result = await consulta(sql)
    return result
}