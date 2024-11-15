// importar dependencias y módulos 
import login from "../services/loginService.js";
import express from "express";

// 2. configurar nuestro router de express
const loginRouter = express.Router();

// 3. creamos la ruta -> crear un inicio de sesión 
// GET -> mostar, leer. obtener
// POST -> Crear
// PUT -> actualizar 
// DELETE -> Eliminar 

loginRouter.post("/", login);

export default loginRouter;
// Le indico las rutas que se deben utilizar 
;
