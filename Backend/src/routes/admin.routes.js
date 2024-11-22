import express from 'express';
import { 
    adminCreateUser, 
    adminDeleteUser, 
    adminGetAllUsers, 
    adminApprovePet, 
    adminRejectPet, 
    adminDeletePet, 
    adminGetAllPets 
} from '../controllers/AdminController.js';

const routerAdmin = express.Router();

// Rutas para la gestión de usuarios por parte del Admin
routerAdmin.post('/usuarios/crear', adminCreateUser);           // Crear un usuario
routerAdmin.get('/usuarios', adminGetAllUsers);                 // Obtener todos los usuarios
routerAdmin.delete('/usuarios/eliminar/:id', adminDeleteUser);  // Eliminar un usuario por ID

// Rutas para la gestión de mascotas por parte del Admin
routerAdmin.get('/mascotas', adminGetAllPets);                  // Obtener todas las mascotas
routerAdmin.put('/mascotas/aprobar/:id', adminApprovePet);      // Aprobar una mascota por ID
routerAdmin.put('/mascotas/rechazar/:id', adminRejectPet);      // Rechazar una mascota por ID
routerAdmin.delete('/mascotas/eliminar/:id', adminDeletePet);   // Eliminar una mascota por ID

export default routerAdmin;
