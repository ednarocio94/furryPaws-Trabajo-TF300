// ESTE ARCHIVO ES PARA DEFINIR LA ESTRUCTURA DE LOS DATOS QUE SE VAN A GUARDAR EN LA BASE DE DATOS.

// 1. Importamos la dependencia 

import mongoose from "mongoose"



// 2. plantilla de los datos se define como SCHEMA -> esquema de datos que vamos a solicitar para guardar en la base de datos.

const productSchema = new mongoose.Schema({
    Image: {type: String,required: true},// este nombre lo elegimos, son caracteristicas de la info que quiere guardar
    name: {type:String, required: true},
    category: {type:String},
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
    isAvaileable: {type: Boolean}, // true or false -> booleano
});

// 3.  Decierle a la base de datos que se cree una colección con el esquema anterior 
export const productModel = mongoose.model("product", productSchema);
