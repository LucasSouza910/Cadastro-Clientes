const usuarioBD = require('./db.js');
const seguranca = require('./components/seguranca')

async function selectUsuario(){
    const conn = await usuarioBD.connect();
    const [rows] = await conn.query('SELECT * FROM usuario;');
    return rows;
}