const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`))

io.on('connection', socket => console.log('user connected'))


http.listen(3000, () => console.log('listening on port 3000'))
