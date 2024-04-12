const User = require('../models/Usuario');

const deleteAll = async (req, res) => {
    try {
      const { name } = req.body;
      const user = await User.findOne({ where: { name: name } });
  
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
  
      // Eliminar todos los registros de favoritos asociados al usuario
      await user.destroy({ where: {} });
  
      res.json({ message: 'Todos los favoritos han sido eliminados correctamente' });
    } catch (error) {
      console.error('Error al eliminar todos los favoritos:', error);
      res.status(500).send('Error interno del servidor');
    }
  };
  
  module.exports = deleteAll;