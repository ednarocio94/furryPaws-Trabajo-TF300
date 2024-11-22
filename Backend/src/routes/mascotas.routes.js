// routes/MascotaRoutes.js

import express from 'express';
import { 
    crearMascota, 
    obtenerMascotas, 
    obtenerMascotaPorId, 
    actualizarMascota, 
    eliminarMascota 
} from '../controllers/MascotaController.js';

const petsrouter = express.Router();

petsrouter.post('/', crearMascota);
petsrouter.get('/', obtenerMascotas);
petsrouter.get('/:id', obtenerMascotaPorId);
petsrouter.put('/:id', actualizarMascota);
petsrouter.delete('/:id', eliminarMascota);

export default petsrouter;
