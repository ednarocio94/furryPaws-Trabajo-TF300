// Importar dependencias y controladores necesarios
import express from "express";
import { createUser, showUsers, putUserById, deleteUserById } from "../controllers/user.controller.js";

// Crear una instancia de Router para manejar rutas de usuarios
const routerUser = express.Router();

// Ruta para crear un usuario (POST)
routerUser.post("/crear", createUser);

// Ruta para obtener la lista de usuarios (GET)
// Se recomienda agregar middleware de autenticación si es necesario (auth("admin"))
routerUser.get("/obtener", showUsers);

// Ruta para actualizar un usuario por ID (PUT)
// Agregar middleware de autenticación en el futuro (auth)
routerUser.put("/actualizar/:id", putUserById);

// Ruta para eliminar un usuario por ID (DELETE)
routerUser.delete("/eliminar/:id", deleteUserById);

// Exportar el Router para usarlo en el resto de la aplicación
export default routerUser;
