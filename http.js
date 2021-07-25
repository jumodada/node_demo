const http = require('http')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type': 'text/html'})
    res.end('<h1>Hello My Friend</h1>')
})

server.listen(3000,()=>{
    console.log('listen to 3000')
})
