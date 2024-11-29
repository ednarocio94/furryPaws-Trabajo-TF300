import express from 'express';
import { createAdmin, showAdmin, deleteAdminById } from '../controllers/admin.controller.js';
import auth from '../middleware/auth.js';

const routerAdmin = express.Router();

// Rutas para la gestión de Admin por parte del Admin
routerAdmin.post('/admin/crear', createAdmin);           // Crear un usuario
routerAdmin.get('/admin', showAdmin);                 // Obtener todos los admin
routerAdmin.delete('/admin/eliminar/:id', auth("admin"), deleteAdminById);  // Eliminar un usuario por ID


export default routerAdmin;
