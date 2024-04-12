const User = require('../models/Usuario');

const createUser = async (req, res) => {
  try {
    const { name, favorites, image } = req.body;

    const existingUser = await User.findOne({ where: { name } });
    if (existingUser) {
      return res.status(400).json({ error: 'El usuario ya existe' });
    }
    // Crear el usuario en la base de datos
    const newUser = await User.create({
      name,
      favorites,
      image
    });

    // Enviar la respuesta con el nuevo usuario creado
    res.json(newUser);
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    res.status(500).send('Error interno del servidor');
  }
};

module.exports = createUser;