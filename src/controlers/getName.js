const User = require('../models/Usuario');

const getName = async (req, res) => {
  try {
    // Obtener el ID del usuario de la solicitud
    const { name } = req.body;
   
    if (!name) {
        return res.status(400).json({ error: 'El nombre del usuario es requerido' });
      }
    // Buscar el usuario en la base de datos por su name
    const user = await User.findAll({ where: { name: name } });

    // Verificar si se encontró el usuario
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error al agregar favoritos:', error);
    res.status(500).send('Error interno del servidor');
  }
};

module.exports = getName;