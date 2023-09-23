// app.js
const express = require('express');
const bodyParser = require('body-parser');
const user = require('./controllers/userController');
const authControlador = require('./controllers/authController');
const verificarToken = require('./middleware/authMiddleware');

const app = express();

app.use(bodyParser.json());

// Rutas para CRUD de usuarios
app.get('/usuarios', user.obtenerTodos);
app.get('/usuarios/:id', user.obtenerPorId);
app.post('/usuarios', user.crear);
app.put('/usuarios/:id', user.actualizar);
app.delete('/usuarios/:id', user.eliminar);
app.get('/verificar', user.verificarUsuario);

// Ruta protegida
app.get('/usuariosT', verificarToken, user.obtenerTodos);


app.post('/login', authControlador.iniciarSesion);// app.js





app.listen(3000, () => {
  console.log('Servidor en ejecución en el puerto 3000');
});
