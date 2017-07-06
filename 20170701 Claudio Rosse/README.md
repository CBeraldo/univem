
Cláudio Rosse Pandolf
crp_rosse@hotmail.com
Git/claudiodeveloper

Node.js at PayPal - Matt Edelman
Node.js at Netflix - Kil trott
Node.js - Rodrigo Branas

cluster - multithread

# Modularização

```
module.exports
exports
this
```

# Objetos globais

```
global.myGlobalVar = {}
```

# Timers

```
// executa a função após N segundos
a = setTimeout(() => {}, 3000) // ms

// executa a função a cada N segundos
a = setInterval(() => {}, 3000) // ms

// executa após finalizar toda a execução do script
a = setImmediate(() => {}) // ms

// cancela a execução do evento "a"
clearInterval(a)
clearTimeout(a)
```

node-cron ou node-schedule para agendamento de execução de eventos (não da para agendar via código).

# Process

```
// argumentos de arquivo "node meuarquivo.js [argumentos].
process.argv

// ignora caminho do node e caminho do arquivo.
options = process.argv.slice(2)
```

file 1 > out.log // log de execução (processes.std write)
file 2 > out.log // log de error (processes.std err)

# Core modules

## net
- Interagem com diversos tipos de protocolos TCP (HTTP, SMTP, FTP, IRC).
- Conexão TCP bidirecional.
- nodejs.org/api/events

```
const net = require('net')

net.connect(3000)
net.connect({ port: 3000, host: '192.168.X.X' })

```

## HTTP

```
const http = require('http')
http.createServer(() => { console.log('server started') }).listen(8088)
```

## Express

### Middlewares

- body-parser
- cookie-parser
- multer


