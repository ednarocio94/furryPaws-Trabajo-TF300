// Aque configuramos los metodos necesarios para generar y verificar nuestro
// Token de autenticación 

// 1. Instalar la libreria ->
// 2. creamos una clave secreta


//----------------------------------------------

// Importar modulos y dependencias que necesitamos
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// 4. configurar el uso de la clve secreta creada enb el archivo .env
const key = process.env.SECRET_KEY;

// 5. crear las funcione para generar y verificar el token
// Funcion Para generar token -> funciones declaradas o funciones flecha
// payload es la info del usuario
export function generateToken(payload){
    // nos estamos creando una funcion que promete devolver una respuesta despues de cierto tiempo
    // estamos creando una funcion que se llama callback -> ()=>
    return new Promise((resolve, reject)=>{

        jwt.sign(payload, key, {expiresIn:'1h'}, (error, token)=>{
            if(error){
                // si sale mal que me responda con error
                reject(new Error('Error al generar JWT ' + error.message));
            }else{
                // si sale bien que me responda con un token
                resolve(token);
            }
        });
    });
}

// funcion pars verificar  que el token sea generado por nuestro servidor y no fue alterado
// token -> el token que queremos verificar
export const verifyToken = (token)=>{
    return new Promise((resolve, reject)=>{
        jwt.verify(token, key, (error, decoded)=>{
            if(error) {
                // si sale mal que me responda con error
                reject(new Error('Error al generar JWT ' + error.message));
            }else{
                resolve(decoded);
            }
        });
    });
}