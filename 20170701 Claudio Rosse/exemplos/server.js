
const net = require('net')

net.createServer(function(connection) {
    connection.write("Hello, I'm a server.")
    connection.on('data', function(message) {
        console.log(message.toString())
    })
}).listen(3000)

