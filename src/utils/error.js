


export function criarErro(err) {
    let obj = {
        erro: err.message,
        ts: new Date()
    }

    return obj
}