import express from 'express';
import { createAdmin, showAdmin, deleteAdminById } from '../controllers/admin.controller.js';

const routerAdmin = express.Router();

// Rutas para la gestión de Admin por parte del Admin
routerAdmin.post('/admin/crear', adminCreateUser);           // Crear un usuario
routerAdmin.get('/admin', adminGetAllUsers);                 // Obtener todos los admin
routerAdmin.delete('/admin/eliminar/:id', adminDeleteUser);  // Eliminar un usuario por ID


export default routerAdmin;
