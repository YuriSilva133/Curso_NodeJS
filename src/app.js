


import express from 'express'
const servidor = express();

// permite o uso de parametro de corpo
servidor.use(express.json()) 

// permite a criação de um arquivo .env
import 'dotenv/config.js'

// permite que outros aplicativos interajam com a API
import cors from 'cors';
servidor.use(cors());

import calculadoraController from "./controller/calculadoraController.js"
import exerciciosController from "./controller/exerciciosController.js"
import lojaController from "./controller/lojaController.js"
import mensagemController from "./controller/mensagemController.js"
import usuarioController from "./controller/usuarioController.js"


// liberação dos arquivos
servidor.use('/storage/perfil', express.static('./storage/perfil')) 
servidor.use('/storage/album', express.static('./storage/album')) 

// controllers
servidor.use(calculadoraController)
servidor.use(exerciciosController)
servidor.use(lojaController)
servidor.use(mensagemController)
servidor.use(usuarioController)

// Porta da API
const PORTA = process.env.PORTA

servidor.listen(
    PORTA,
    () => console.log('----> API subiu com sucesso na porta ' + PORTA));