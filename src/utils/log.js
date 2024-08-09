import { horaAtual } from "../utils/datetime.js";

export function logError(err) {
    console.log(horaAtual() +  ' ERROR ---> ' + err.message);
}