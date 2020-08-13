const express = require("express");
const app = express();
const path = require('path')

const hostname = '127.0.0.1';
const port = 8080;
app.use('/static', express.static("static"))
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.get('/gemo',(req,res)=>{
    res.render('g',{title:'kullay', massage:'this is kullay'})
})
app.get('/', (req, res) => {
    res.send('hellow world')
})
app.get('/contact', (req, res) => {
    res.send('hellow contact')
})
app.get('/about', (req, res) => {
    res.send('hellow about')
})
app.listen(port, hostname, (req, res) => {
    console.log(`server is running at port 8080.......->http://${hostname}:${port}`)
})
