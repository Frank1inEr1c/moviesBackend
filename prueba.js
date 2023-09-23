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

// Mostramos las variables de entorno
console.log(POSTGRES_HOST);
console.log(POSTGRES_PORT);
console.log(POSTGRES_DATABASE);
console.log(POSTGRES_USER);
console.log(POSTGRES_PASSWORD);