import express from 'express'

const servidor = express();
servidor.use(express.json())

//Parametro de rota
servidor.get('/helloworld', (req, resp) => {
    //codigo do endpoint

    resp.send({
        mensagem: 'Hello World!'
    })
})

servidor.get('/v2/mensagem/ocupado', (req, resp) => {
    resp.send({
        mensagem: 'Isso é verssionamento'
    })
})

servidor.get('/calculadora/:n1/:n2', (req, resp) => {
    let n1 = Number(req.params.n1)
    let n2 = Number(req.params.n2)
    let soma = n1 + n2

    resp.status(204).send({
        entrada: {
            numero1: n1,
            numero2: n2
        },
        Soma: soma
    })
})

//Parametro de Query
servidor.get('/calculadora/somar2', (req, resp) => {
    let n1 = Number(req.query.num1)
    let n2 = Number(req.query.num2)
    let soma = n1 + n2

    resp.send({
        Soma: soma
    })
})

servidor.get('/mensagem/ola', (req, resp) =>{
    let pessoa = req.query.nome ?? '!!!'
    
    resp.send({
        mensagem: 'Olá ' + pessoa
    })
})

//Parametros de corpo
servidor.post('/media', (req, resp) => {
    let n1 = req.body.nota1
    let n2 = req.body.nota2
    let n3 = req.body.nota3
    
    let media = (n1 + n2 + n3) /3

    resp.send({
        media: media
    })
})

servidor.post('/dobro', (req, resp) => {
    let nums = req.body.numeros

    let nums2 = []

    for (let i = 0; i < nums.length; i++) {
        nums2[i] = nums[i] * 2;
    }

    resp.send({
        numeros: nums,
        dobros: nums2 
    })
})

//parametros combinados
servidor.post('/loja/pedido', (req, resp) =>{
    let total = req.body.total;
    let parcelas = req.body.parcelas
    let cupom = req.query.cupom

    if (parcelas > 1) {
        let juros = total * 0.05
        total += juros
    }

    if (cupom == 'QUERO100') {
        total -= 100;
    }

    let valorParcela = total / parcelas

    resp.send({
        total: total, 
        parcelas: valorParcela
    });
})

servidor.post('/loja/pedido/completo', (req, resp) =>{
    let parcelas = req.body.parcelas
    let itens = req.body.itens
    let cupom = req.query.cupom

    let total = 0
    for (let produto of itens) {
        total += produto.preco
    }

    if (parcelas > 1){
        let juros = total * 0.05
        total += juros
    }  

    if (cupom == "QUERO100") {
        total -= 100
    }

    let valorParcela = total / parcelas

    resp.send({
        total: total,
        parcelas: valorParcela
    })
})

//Porta da API
servidor.listen(5001, () => console.log('----> API subiu com sucesso'));

