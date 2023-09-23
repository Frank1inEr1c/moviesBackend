# crear bd Peliculas_db
# Crear Tabla
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(90) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  nombres VARCHAR(255),
  ap_paterno VARCHAR(100),
  ap_materno VARCHAR(100)
);

# Instalar
node.js  v18.14.1

npm init -y
npm install express dotenv axios pg-promise jsonwebtoken bcrypt