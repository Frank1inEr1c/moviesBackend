// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'mi_clave_secreta'; // Debe coincidir con la clave en authController.js

function verificarToken(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.usuarioId = decoded.usuario;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token inválido' });
  }
}

module.exports = verificarToken;
