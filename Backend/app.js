// El archivo app.js -> es el archivo de ejecución de nuestroaplicativo web
// Acá vas a configurar nuestro servidor con EXPRESS y vamos a gestionar todo lo relacionado con la lógica de negocio -> conexion base de datos, peticiones, respuestas

// 1. IMPORTAR LAS DEPENDENCIAS Y MÓDULOS QUE NECESITAMOS
import express from 'express'; //ECMAS 6
import dotenv from 'dotenv'; //dependencia para manejar variables de entorno
import { connectionMongo } from './src/config/dataBase.js';


// 2. configurar el uso de nuestro servidor
const app = express(); 
dotenv.config(); //configurando para poder usar variables de entorno
connectionMongo();


const port = process.env.PORT//6000, 9000


// 3. ejecutar el servidor en nuestro computador
app.listen(port, ()=>{
    console.log('El servidor está ejecutándose correctamente, en el puerto ', port);
});