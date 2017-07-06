
const net = require('net')
const client = net.connect(3000)

client.on("connect", function(connection) {
    client.write("Hello, I'm a client.")
})

client.on("data", function(message) {
    console.log(message.toString())
}) 

process.stdin.on("readable", function() {
    var message = process.stdin.read()
    if (!message) return

    message = message.toString().replace(/\n/, '')

    client.write(message)
})

