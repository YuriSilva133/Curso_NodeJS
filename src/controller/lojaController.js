import { Router } from "express";
const endpoints = Router()

import { calcularTotal, calcularValorparcela} from "../services/loja/pedidoCompletoService.js";

//parametros combinados
endpoints.post('/loja/pedido', (req, resp) => {
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

endpoints.post('/loja/pedido/completo', (req, resp) => {
    try {
        //validações
        if (!req.body.parcelas || isNaN(req.body.parcelas)) throw new Error('O parâmetro parcela esta invalido.')
        if (!req.body.itens) throw new Error('O parâmetro itens está invalido.')
            
        let parcelas = req.body.parcelas
        let itens = req.body.itens
        let cupom = req.query.cupom

        let total = calcularTotal(parcelas, itens, cupom)
        let valorParcela = calcularValorparcela(total, parcelas)
        
        resp.send({
            total: total,
            qtdParcelas: parcelas,
            valorParcelas: valorParcela
        })
    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints