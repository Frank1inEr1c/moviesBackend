const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;

const Sequelize = require('sequelize');

/*const sequelize = new Sequelize('postgres://localhost:5432/peliculas_db', {
  username: 'postgres',
  password: 'postgres'
});*/

const sequelize = new Sequelize('postgres://'+POSTGRES_HOST+':'+POSTGRES_PORT+'/'+POSTGRES_DATABASE, {
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD
});

module.exports = sequelize;