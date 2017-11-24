const server = require('http').createServer()
const io = require('socket.io')(server)
io.on('connection', client => {
  client.on('event', data => console.log(data))
  client.on('disconnect', () => console.log(`${client} disconnected`))
})

server.listen(3000)
