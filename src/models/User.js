// modelos/usuarioModelo.js
const db = require('../config');

class Usuario {
  constructor(id, username, password) {
    this.id = id;
    this.username = username;
    this.password = password;
  }

  static obtenerTodos() {
    return db.any('SELECT * FROM users');
  }

  static obtenerPorId(id) {
    return db.one('SELECT * FROM users WHERE id = $1', id);
  }

  static crear(username, password) {
    return db.one('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id', [username, password]);
  }

  static actualizar(id, username, password) {
    return db.none('UPDATE users SET username = $1, password = $2 WHERE id = $3', [username, password, id]);
  }

  static eliminar(id) {
    return db.none('DELETE FROM users WHERE id = $1', id);
  }

  static verificarUsuario(username, password) {
    return db.oneOrNone('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password]);
  }

}

module.exports = Usuario;
