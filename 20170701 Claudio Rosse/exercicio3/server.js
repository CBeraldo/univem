
const net = require('net')
const connections = []

const broadcast = (message, current) => {
    connections.forEach(connection => {
        if (current == connection) return
        connection.write(message)
    })
}

net.createServer(function(connection) {
    connections.push(connection)

    connection.write("Você está conectado!")
    connection.on('data', message => broadcast(message, connection))
    connection.on('end', message => console.log(connection.login + ' saiu.'))
}).listen(3000)
