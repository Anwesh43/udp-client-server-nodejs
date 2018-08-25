const {port} = require('./config')
const dgram = require('dgram')
const client = dgram.createSocket('udp4')
process.stdin.on('data', (data) => {
    if (data.toString().trim() == "quit") {
        client.send(Buffer.from('close'), port)
        client.close()
        process.stdin.pause()
    }
    else {
        client.send(data, port)
    }
})
process.stdin.resume()
