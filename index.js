const express = require("express");
const usuarioBD = require("../Cadastro-Clientes/model/repositories/usuarioBD")
const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs')
var path = require('path');
app.set('views', path.join(__dirname, '/view/'));

bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}));

var consign = require('consign');
consign().include('controller/routes',).into(app);

app.get("/", function(req, resp){
    resp.send("Bem-Vindo ao meu app");
})

app.get("/contato", function(req, resp){
    resp.send("Página de contato");
})

app.get("/produto", function(req, resp){
    resp.send("Página de produto");
})

app.get("/dados/:nome/:cargo", function(req, resp){
    resp.send("<h1>Olá Sr(a)."+req.params.nome+ "</h1><h2>Seu cargo é " +req.params.cargo+ "</h2>");
})

app.listen(8081, function(){
    console.log("Servidor funcionando na url http://localhost:8081");
})