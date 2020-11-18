const jsonServer = require('json-server')
const server = jsonServer.create()

server.use(jsonServer.defaults())
server.use(jsonServer.router('db.json'))
server.listen(process.env.PORT || 3000)
