const http = require('http');
const hostname = '127.0.0.1'
const port = 8080
http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' })
    res.end('hellow world')
}).listen(port, hostname, () => {
    console.log(`server is running at port 8080....-->http://${hostname}:${port}`)
})

    //yahooooooooooooo