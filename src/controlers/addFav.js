const User = require('../models/Usuario');

const addFavorites = async (req, res) => {
  try {
    const { favorites, name } = req.body;
    
    const user = await User.findOne({ where: { name: name } });
   
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    
    // Convertir la cadena de favoritos en un array
    const favoriteArray = Array.isArray(favorites) ? favorites : [favorites];

    // Asignar el array de favoritos al campo favorites del usuario
    user.favorites = user.favorites.concat(favoriteArray);

    // Guardar los cambios en la base de datos
    await user.save();
    res.json(user);
  } catch (error) {
    console.error('Error al agregar favoritos:', error);
    res.status(500).send('Error interno del servidor');
  }
};

module.exports = addFavorites;
