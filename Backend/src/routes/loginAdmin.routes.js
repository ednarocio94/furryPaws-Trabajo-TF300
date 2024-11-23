// Importación de servicio de inicio de sesión y módulo express
import login from "../services/loginService.js";
import express from "express";

// Configuración del router para el inicio de sesión
const loginRouter = express.Router();

// Ruta POST para gestionar el inicio de sesión
// Al recibir una solicitud POST, se invoca el servicio de inicio de sesión
loginRouter.post("/", login);

// Exportación del router para su uso en otros módulos
export default loginRouter;

