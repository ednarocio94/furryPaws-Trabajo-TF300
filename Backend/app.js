// IMPORTAR LAS DEPENDENCIAS Y MÓDULOS QUE NECESITAMOS
import express from 'express';
import dotenv from 'dotenv';
import { connectionMongo } from './src/config/dataBase.js';
import mascotasRouter from './routes/MascotaRoutes.js';

// CONFIGURAR EL USO DE NUESTRO SERVIDOR
const app = express();
dotenv.config();
connectionMongo();

const port = process.env.PORT || 6000;

// Middleware
app.use(express.json());
app.use('/mascotas', mascotasRouter);

// INICIAR EL SERVIDOR
app.listen(port, () => {
    console.log('El servidor está ejecutándose correctamente, en el puerto ', port);
});
