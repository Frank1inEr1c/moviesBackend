const Usuario = require('../models/User');
// controller/authController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const SECRET_KEY = 'mi_clave_secreta'; // Cambiar esto a una clave segura en un entorno de producción

const authControlador = {
    iniciarSesion: async (req, res) => {
    const { username, password } = req.body;

    const usuario = await Usuario.verificarUsuario(username, password);

    //const usuario = { id: 1, username: 'usuario1', password: '123456' };

    if (!usuario) {
      return res.status(401).json({ error: 'Usuario no encontrado' });
    }

    /*const passwordValida = await bcrypt.compare(password, usuario.password);

    if (!passwordValida) {
      return res.status(401).json({ error: 'password incorrecta' });
    }*/

    const token = jwt.sign({ usuario: usuario.id }, SECRET_KEY, { expiresIn: '1h' });

    res.json({ token });
  }
};

module.exports = authControlador;
