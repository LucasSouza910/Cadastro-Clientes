module.exports = function(app){
    app.get("/login", function(req, res){
        if(req.query.fail)
        res.render('usuario/Login',{ mensagemLogin:
        'Usuário e/ou senha incorretos!'});

    else
        res.render('usuario/Login', { mensagemLogin: null });
    })

    app.post('/login/executar', (req,res) => {
        if( req.body.nome === "Lucas"
        && req.body.senha === "123456")
        res.render('/lista/usuario', { mensagem: 'cadastrado' });

    else
    res.render('/login/?fail=true');

    });
}