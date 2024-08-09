import { horaAtual } from "../utils/datetime.js";

global.criarErro = function criarErro(err) {
    let obj = {
        erro: err.message,
        ts: new Date()
    }

    return obj
}

global.logErro = function logErro(err) {
    console.log(horaAtual() +  ' ERROR ---> ' + err.message);
}