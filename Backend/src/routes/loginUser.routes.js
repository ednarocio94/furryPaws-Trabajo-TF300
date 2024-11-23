// Importación de servicio de inicio de sesión y módulo express
import login from "../services/loginService.js";
import express from "express";

// Inicialización del router de Express para las rutas de login
const loginRouter = express.Router();

// Definición de la ruta POST para el inicio de sesión
// Esta ruta recibirá los datos de login y procesará la autenticación
loginRouter.post("/", login);

// Exportación del router de login para ser utilizado en otros módulos
export default loginRouter;
