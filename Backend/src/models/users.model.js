// Importamos dependencias 

import { type } from "express/lib/response";
import mongoose from "mongoose";

// 2. creamos el esquema de datos
const userSchema = new mongoose.Schema({
    fullname: {type: String, required:true},
    email: { type: String, required:true},
})