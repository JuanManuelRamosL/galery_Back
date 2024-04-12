const User = require('../models/Usuario');

const deleteFav = async (req, res) => {
  try {
    const { favorites, name } = req.body;
    
    // Buscar el usuario por su nombre
    const user = await User.findOne({ where: { name: name } });

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Eliminar el registro que coincide con los favoritos recibidos en la solicitud
    await user.destroy({ where: { favorites: favorites } });

    res.json({ message: 'Favoritos eliminados correctamente' });
  } catch (error) {
    console.error('Error al eliminar favoritos:', error);
    res.status(500).send('Error interno del servidor');
  }
};

module.exports = deleteFav;