// módulos externos
const net = require('net')

// variaveis locais 
const usuario = {
    login: "",
    senha: "",
    entrou: false
}

// funções de acesso
const solicitarLogin = () => {
    // process.stdin.once("data", (data) => {
    //     var dados = data.toString().replace(/\r\n/, '').split(' ')
    //     login(dados)
    // })

    login()
}
const login = (dados) => {
    // criterio de login
    usuario.login = "CBeraldo" // dados[0] 
    usuario.senha = "1234" //dados[1]
    usuario.entrou = true //usuario.login == usuario.senha

    // if (!usuario.entrou) {
    //     console.error('\n\nLogin invalido, tente novamente.')
    //     solicitarLogin()
    //     return
    // }

    // realizar conexão ao servidor
    conectar()
}
const ouvirCliente = (client) => {
    process.stdin.on("readable", function() {
        if (!usuario.entrou) return

        var message = process.stdin.read()
        if (!message) return

        message = usuario.login + ': ' + message.toString().replace(/\n/, '')

        client.write(message)
    })
}
const criarCliente = () => {
    const client = net.connect(3000)

    client.on("connect", function(connection) {
        console.log('\n\nBem vindo ao chat, ' + usuario.login + '.\nDigite algo e tecle "Enter" para enviar.')
        client.write("Usuario " + usuario.login + " entrou.")
    })

    client.on("data", function(message) {
        console.log("Nova mensagem (" + new Date().toLocaleString() + "): " + message.toString())
    })

    return client
}

// funções de conexão ao servidor 
const conectar = () => {
    const client = criarCliente()
    ouvirCliente(client)
}

// solicita login do cliente
console.log('\n\nOlá!\nPor favor, entre para conectar-se ao chat...\n[Usuário] [Senha]')
solicitarLogin()
