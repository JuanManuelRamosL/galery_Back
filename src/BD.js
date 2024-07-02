require("dotenv").config()
const{USER,PASWORD,HOST,PORT,BDD}= process.env

const Sequelize = require('sequelize');

//const sequelize = new Sequelize(`postgres://${USER}:${PASWORD}@${HOST}:${PORT}/${BDD}`,{logging:false})

/* const sequelize = new Sequelize("postgres://juan:mgrSUsNkOyQuK5lQQipKsSo8281Duvde@dpg-co8lteol5elc739184eg-a.oregon-postgres.render.com/bd_galery", {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Deshabilita la verificación del certificado SSL
    }
  }
}); */const sequelize = new Sequelize("postgres://default:iwIlOJo0Q7ae@ep-holy-king-a4yfdy7k-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require", {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Deshabilita la verificación del certificado SSL
    }
  }
}); 



// Probar la conexión a la base de datos
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente');
  })
  .catch(err => {
    console.error('Error al conectar a la base de datos:', err);
  });
module.exports = sequelize;