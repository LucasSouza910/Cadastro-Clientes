const Sequelize = require('sequelize');
const sequeliza = new Sequelize('agendamento', 'root', 'root',
                    {dialect: 'mysql', host:'localhost', port:3306});
module.exports = sequelize