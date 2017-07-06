const http = require('http')
const path = require('path')
const fs = require('fs')

http.createServer((req, res) => {
    var url = req.url
    if (url == '/') url = '/index'
    var file = path.join(__dirname, url.replace('/', '') + '.html')

    fs.readFile(file, (error, data) => {
        if (error) {
            res.writeHead(404)
            res.write("<h1>Pagina nao encontrada!</h1>")
            res.end()
            return
        }

        res.setHeader('Content-Type', 'text/html')
        res.writeHead(200)
        res.write(data.toString())
        res.end()
    })

}).listen(3000)