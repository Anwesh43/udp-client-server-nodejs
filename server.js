const dgram = require('dgram')
const server = dgram.createSocket('udp4')
server.on('message', (msg, arg1) => {
    const message = msg.toString().trim()
    if (message == "close") {
        server.close()
    }
    console.log(message)
})

server.on('listening', () => {
    console.log("started listening")
})
const {port} = require('./config')
server.bind(port)
