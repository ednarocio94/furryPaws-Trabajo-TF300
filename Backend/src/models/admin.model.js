// ESTE ARCHIVO ES PARA DEFINIR LA ESTRUCTURA DE LOS DATOS QUE SE VAN A GUARDAR EN LA BASE DE DATOS

// 1. Importamos las depencia
import mongoose from 'mongoose';


// 2. plantilla de los datos se define como SCHEMA -> esquema de datos que vamos a solicitar para guardar en la base de datos

const productSchema = new mongoose.Schema({
    //este nombre lo eligen usted, son caracteristicas de la info que quiere guardar
    image:{type: String, required: true}, 
    fullName: {type: String, required:true},
    email: {type:String, required:true, unique:true},
    password: {type: String, required:true},
    role:{type: String, default: 'admin 1'}
});



// 3. Decirle a la base de datos que se cree una colección con el esquema anterior
//el primer parámetro, es el nombre de la colección
//el segundo parámetro, es la estructura de datos
export const productModel = mongoose.model('product', productSchema);