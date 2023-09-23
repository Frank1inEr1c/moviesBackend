// Importamos el módulo dotenv
const dotenv = require('dotenv');

// Cargamos las variables de entorno desde el archivo .env
dotenv.config();

// Obtenemos las variables de entorno
const POSTGRES_HOST = process.env.POSTGRES_HOST;
const POSTGRES_PORT = process.env.POSTGRES_PORT;
const POSTGRES_DATABASE = process.env.POSTGRES_DATABASE;
const POSTGRES_USER = process.env.POSTGRES_USER;
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

