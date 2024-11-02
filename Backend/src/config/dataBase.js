// EN ESTE ARCHIVO, ESCRIBIMOS EL CÓDIGO PARA LA CONEXIÓN CON LA BASE DE DATOS

// 1. Importar las dependencias que se necesitan
import mongoose from 'mongoose';

// 2. Crearmos una función para conectar la base de datos
// Función asincrónica -> necesitamos esperar una respuesta

export async function connectionMongo(){
    // debes controlar los errores -> boque try - catch
    // try  -> gestiona cuando la respuesta es positiva
    // catch -> atrapa los errores 

    try{
        // conectar base de datos
        await mongoose.connect(process.env.DB_URL,{});
        console.log('Conexión exitosa con la base de datos');
    }catch(error){
        console.error('Error de conexión: ' + error);
    }
} 