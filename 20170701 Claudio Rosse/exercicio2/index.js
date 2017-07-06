// modulos externos
const clientes = require('./data')

// funções auxiliares
const getView = (view) => views[view.toUpperCase()]

// constantes
const options = process.argv.slice(2)
const views = {
    VISUALIZA_NOME: 'nome',
    VISUALIZA_EMAIL: 'email',
    VISUALIZA_TELEFONE: 'telefone'
}

// funções genéricas
const finalizar = (atual, max) => {
    if (atual == max) clearInterval(interval)
}
const exibir = (data, prop) => {
    var i = 0
    var max = data.length

    return () => {
        switch (prop) {
            case undefined:
                console.log(data[i++])
                break;
            default:
                console.log(data[i++][prop])
                break;
        }

        finalizar(i, max)
    }
}

// funções específicas
const exibirClientes = (view) => {
    interval = setInterval(exibir(clientes, getView(view)), 3000)
}

// variáveis
var view = options[0] || ''

exibirClientes(view)
