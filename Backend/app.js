// El archivo app.js -> es el archivo de ejecución de nuestroaplicativo web
// Acá vas a configurar nuestro servidor con EXPRESS y vamos a gestionar todo lo relacionado con la lógica de negocio -> conexion base de datos, peticiones, respuestas

// 1. IMPORTAR LAS DEPENDENCIAS Y MÓDULOS QUE NECESITAMO
import express from "express";
import dotenv from "dotenv"; //dependencia para manejar variables de entorno
import { connectionMongo } from './src/config/dataBase.js';
import { productRouter } from "./src/routers/products.routes.js";

// 2. configurar el uso de nuestro servidor
const app = express(); 
dotenv.config(); //configurando para poder usar variables de entorno
connectionMongo();
const port = process.env.PORT//6000, 9000

// le indico las rutas que debe utilizar 
app.use(express.json()); // para usar nuestro archivo app.js
app.use("/productos", productRouter)



// 3. ejecutar el servidor en nuestro computador
app.listen(port, ()=>{
    console.log('El servidor está ejecutándose correctamente, en el puerto ', port);
});

//