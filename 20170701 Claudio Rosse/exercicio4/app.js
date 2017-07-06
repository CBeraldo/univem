var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// req.query.nome_parametro
// req.body.nome_parametro

app.get('/', (req, res) => {
    res.render("index")
})
app.get('/cadastrar-livro', (req, res) => {
    res.render("cadastrar-livro")
})
app.post('/teste', (req, res) => {
    res.send(req.body)
})

//app.get('/livros', (req, res) => {
//    res.render("index", { title: "Node JS App" })
//})

app.listen(5000, () => {
    console.log('server started')
})