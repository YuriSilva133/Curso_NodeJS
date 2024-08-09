import express from 'express'
const servidor = express();

// permite o uso de parametro de corpo
servidor.use(express.json()) 

// permite a criação de um arquivo .env
import 'dotenv/config.js'

// permite que outros aplicativos interajam com a API
import cors from 'cors';
servidor.use(cors());

import adicionarRotas from './rotas.js';

//adiciona as rotas
adicionarRotas(servidor)

// Porta da API
const PORTA = process.env.PORTA

servidor.listen(
    PORTA,
    () => console.log('----> API subiu com sucesso na porta ' + PORTA));