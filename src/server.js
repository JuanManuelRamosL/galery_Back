const express = require("express");
const server = express();
const cors = require("cors")
const morgan = require("morgan");
const routes = require('./routes/indexR');

server.use(express.json())
server.use(cors())
server.use(morgan("dev"));
server.use('/', routes);
server.get("/",(req ,res)=>{
try {
    //const response =  respuesta()
    res.status(200).json({ message: '¡Hola, mundo!' });
} catch (error) {
    res.status(500).json({error:error.message})
}
})




module.exports = server