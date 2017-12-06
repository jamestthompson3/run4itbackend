const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)

io.on('connection', socket => {
  console.log(socket.id)
  socket.on('distance', distance => console.log('distance detected ', distance))
})


http.listen(3050, () => console.log('listening on port 3050'))
