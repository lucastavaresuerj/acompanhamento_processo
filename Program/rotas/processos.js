const dbProcesso = require('../DB/processos');
const dbEtapas = require('../DB/etapas');
module.exports = {routerProcessos}

async function routerProcessos(req, res) {
    switch (req.method) {
        case 'GET':
            res.render('Processos_em_Andamento', {
                title: 'Processos',
                processos: await dbProcesso.cardProcess(),
                TotalDeDocumentos: (await dbEtapas.totalDocumentos())[0]["total"]
            })
            break;
        default:
            res.send({error: "Method not Abble"})
            break;
    }
}