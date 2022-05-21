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

    })

    app.get("/cadastro", function(req, res){
        if (req.query.fail)
            res.render('usuario/Cadastro', { mensagem: 'Cadastro' });
        else
            res.render('usuario/Cadastro', { mensagem: null });
    });

    app.post('/cadastro/usuario/edit/salvar', (req, res) => {
        var usuario = {nome: req.body.nome,
        senha: req.body.senha,
        id: req.body.id};
    try {
        usuarioBanco.updateUsuario(usuario);
        res.render('usuario/Sucesso', { mensagem: 'alterado' });
    } catch (error) {
        res.render('usuario/EditUsuario', { title: 'Edição Cadastro',
        mensagem: 'Erro no cadastro' });
    }
    });
}