// Estamos creando el documento userModel
// 1. Importamos dependencias
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  image: { type: String, required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "user" },
  phone: { type: String, required: true },
  isAdult: { type: Boolean, required: true },
  address: { type: String, required: true },
  preferences: {
   type: { type: String, required: true }, // Por ejemplo, "perro"
    size: { type: String, required: true }, // Por ejemplo, "grande"
    age: { type: String, required: true }, // Por ejemplo, "adulto"
  }
})

//3. definir nuestro modelo

export const userModel = mongoose.model("user", userSchema);
