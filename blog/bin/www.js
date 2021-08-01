const http  = require('http')

const port = 9000

const app = require('../app')

const server  = http.createServer()
server.listen(port)
