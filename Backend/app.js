// 1. IMPORTAR LAS DEPENDENCIAS Y MÓDULOS QUE NECESITAMOS
import express from "express"; //ECMAS 6
import dotenv from "dotenv"; //dependencia para manejar variables de entorno
import { connectionMongo } from "./src/config/dataBase.js";
import routerUser from "./src/routes/user.routes.js";
import routerAdmin from "./src/routes/admin.routes.js";
import petsrouter from "./src/routes/mascotas.routes.js";

// 2. CONFIGURAR EL USO DE NUESTRO SERVIDOR
const app = express();
dotenv.config();
connectionMongo();

const port = process.env.PORT || 6000;


// Middleware
app.use(express.json());
app.use("/usuarios",routerUser)// llamar las rutas 
app.use("/",routerAdmin)
app.use('/mascotas', petsrouter);

// 3. Iniciar el servidor
app.listen(port, ()=>{
    console.log("El servidor está ejecutándose correctamente, en el puerto ", port);
});










