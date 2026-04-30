const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('agenda_db', 'root', 'senha', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => console.log('Conexão com MySQL estabelecida!'))
  .catch(err => console.error('Erro ao conectar:', err));

module.exports = sequelize;
