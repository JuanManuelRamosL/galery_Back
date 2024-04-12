const server = require("./src/server")


/* dataB.sync({force:false}) */
const sequelize = require('./src/BD');
const User = require('./src/models/Usuario');

// Sincroniza los modelos con la base de datos
sequelize.sync({ force: false }) // Cambia a 'true' si deseas que se vuelvan a crear las tablas en cada reinicio
  .then(() => {
    console.log('Modelos sincronizados con la base de datos');
  })
  .catch((error) => {
    console.error('Error al sincronizar modelos:', error);
  });

server.listen("2233",()=>{
    console.log("servidor listo en puerto",2233)
})