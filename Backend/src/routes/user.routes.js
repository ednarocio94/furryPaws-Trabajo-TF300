// 1. Importar controladores y dependencias

//import { createUser, showUsers } from "../controllers/user.controller.js";
//import express from "express";
//import auth from "../middleware/auth.js";


// 2. Configurar el router
//export const usersRouter = express.Router();


// 3. Nos creamos la ruta para cada petición

// Ruta para el post
//usersRouter.post("/crear", createUser);

// Ruta para get
//usersRouter.get("/obtener" ,auth("admin"), showUsers);

//--------------------------------------------------------
import express from "express";
import { createUser, showUsers,putUserById, deleteUserById } from "../controllers/user.controller.js";



const routerUser = express.Router();

routerUser.post("/crear", createUser);        // Crear usuario
routerUser.get("/obtener", showUsers); // preguntar a la profe 
routerUser.put("/actualizar/:id", putUserById); // Actualizar usuario // agregar el el auth para la autenticacion
routerUser.delete("/eliminar/:id", deleteUserById); // Eliminar usuario

export default routerUser; //  hacerlo con cada modelo 

