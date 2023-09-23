// controller/userController.js
const { Console } = require('console');
const Usuario = require('../models/User');

const usuarioControlador = {
  obtenerTodos: async (req, res) => {
    try {
      const usuarios = await Usuario.obtenerTodos();
      res.json(usuarios);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Hubo un error al obtener los usuarios.' });
    }
  },

  obtenerPorId: async (req, res) => {
    const id = parseInt(req.params.id);
    try {
      const usuario = await Usuario.obtenerPorId(id);
      res.json(usuario);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Hubo un error al obtener el usuario.' });
    }
  },

  crear: async (req, res) => {
    const { username, password } = req.body;
    try {
      const usuario = await Usuario.crear(username, password);
      res.status(201).json(usuario);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Hubo un error al crear el usuario.' });
    }
  },

  actualizar: async (req, res) => {
    const id = parseInt(req.params.id);
    const { username, password } = req.body;
    try {
      await Usuario.actualizar(id, username, password);
      res.json({ mensaje: 'Usuario actualizado correctamente.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Hubo un error al actualizar el usuario.' });
    }
  },

  eliminar: async (req, res) => {
    const id = parseInt(req.params.id);
    try {
      await Usuario.eliminar(id);
      res.json({ mensaje: 'Usuario eliminado correctamente.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Hubo un error al eliminar el usuario.' });
    }
  },
  
  verificarUsuario: async (req, res) => {
    const { username, password } = req.body;
    try {
      console.log("ddddddddddd");
      const usuario = await Usuario.verificarUsuario(username, password);
      res.json(usuario);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Hubo un error al obtener el usuario por username y password.' });
    }
  }

};

module.exports = usuarioControlador;
