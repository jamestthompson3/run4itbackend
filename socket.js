const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`))

io.on('connection', socket => {
  console.log(socket.id)
  socket.on('distance', coords => console.log('distance detected ', coords))
})


http.listen(3050, () => console.log('listening on port 3050'))
