
const http = require('http')
const data = [{
    nome: 'Caio',
    email: 'cberaldo.desenvolvimento@outlook.com',
    telefone: '99721-9963'
}, {
    nome: 'Pedro',
    email: 'pedro.desenvolvimento@outlook.com',
    telefone: '997485-2254'
}, {
    nome: 'Fernando',
    email: 'fernando.desenvolvimento@outlook.com',
    telefone: '998568-4456'
}]

const server = http.createServer((req, res) => { 
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Content-Type', 'application/json;charset=UTF-8')

    switch (req.url) {
        case '/clientes':
            switch (req.method) {
                case 'GET':
                    res.write(JSON.stringify(data))
                    break;
                default:
                    paginaNaoEncontrada(res)
                    break;
            }
            break;
        default:
            paginaNaoEncontrada(res)
            break;
    }

    res.end()
}).listen(8088)

const paginaNaoEncontrada = (res) => {
    res.write("<h2>Página não encontrada!</h2>")
}
