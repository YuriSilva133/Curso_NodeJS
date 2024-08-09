import { Router } from "express"
const endpoints = Router()

//Parametro de rota
endpoints.get('/mensagem/helloworld', (req, resp) => {
    //codigo do endpoint
    resp.send({
        mensagem: 'Hello World!'
    })
})

endpoints.get('/v2/mensagem/ocupado', (req, resp) => {
    resp.send({
        mensagem: 'Isso é verssionamento'
    })
})

endpoints.get('/mensagem/ola', (req, resp) => {
    if (!req.query.nome) {
        resp.status(400).send({
            erro: 'O parâmetro query (nome) é obrigatorio'
        })
        return
    }

    let pessoa = req.query.nome ?? '!!!'

    resp.send({
        mensagem: 'Olá ' + pessoa
    })
})


export default endpoints