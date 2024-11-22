// Dependencias
import { userModel } from "../models/user.model.js";
import { mascotaModel } from "../models/mascotas.model.js";

// Crear un usuario (ADMIN)
export const adminCreateUser = async (req, res) => {
    try {
        const { fullName, email, password, role } = req.body;

        // Validar que el rol sea "Cliente" o "Admin" según sea necesario
        if (!["Cliente", "Admin"].includes(role)) {
            return res.status(400).json({ mensaje: "Rol no válido" });
        }

        const codedPassword = await bcrypt.hash(password, 10); // Encriptar contraseña
        const newUser = await userModel.create({
            fullName,
            email,
            password: codedPassword,
            role
        });

        res.status(201).json({ mensaje: "Usuario creado correctamente", datos: newUser });
    } catch (error) {
        res.status(400).json({ mensaje: "Error al crear usuario", problema: error.message });
    }
};

// Eliminar un usuario (ADMIN)
export const adminDeleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedUser = await userModel.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ mensaje: "Usuario no encontrado" });
        }

        res.status(200).json({ mensaje: "Usuario eliminado correctamente" });
    } catch (error) {
        res.status(400).json({ mensaje: "Error al eliminar usuario", problema: error.message });
    }
};

// Procesar petición de agregar mascota (ADMIN)
export const adminApprovePet = async (req, res) => {
    try {
        const { id } = req.params;

        const pet = await mascotaModel.findById(id);
        if (!pet) {
            return res.status(404).json({ mensaje: "Mascota no encontrada" });
        }

        // Cambiar estado a "Aprobada" si tiene un sistema de estados
        pet.status = "Aprobada"; 
        await pet.save();

        res.status(200).json({ mensaje: "Mascota aprobada", datos: pet });
    } catch (error) {
        res.status(400).json({ mensaje: "Error al procesar mascota", problema: error.message });
    }
};

// Eliminar mascota (ADMIN)
export const adminDeletePet = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedPet = await mascotaModel.findByIdAndDelete(id);
        if (!deletedPet) {
            return res.status(404).json({ mensaje: "Mascota no encontrada" });
        }

        res.status(200).json({ mensaje: "Mascota eliminada correctamente" });
    } catch (error) {
        res.status(400).json({ mensaje: "Error al eliminar mascota", problema: error.message });
    }
};

// Obtener todas las peticiones de mascotas pendientes (ADMIN)
export const adminGetPendingPets = async (req, res) => {
    try {
        const pendingPets = await mascotaModel.find({ status: "Pendiente" });

        if (pendingPets.length === 0) {
            return res.status(200).json({ mensaje: "No hay mascotas pendientes por aprobar" });
        }

        res.status(200).json({ mensaje: "Mascotas pendientes encontradas", datos: pendingPets });
    } catch (error) {
        res.status(400).json({ mensaje: "Error al obtener mascotas pendientes", problema: error.message });
    }
};
