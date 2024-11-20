// controllers/MascotaController.js

import { ModeloMascota } from '../modelo/Mascota.js';

export const crearMascota = async (req, res) => {
    try {
        const nuevaMascota = new ModeloMascota(req.body);
        const mascotaGuardada = await nuevaMascota.save();
        res.status(201).json(mascotaGuardada);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

export const obtenerMascotas = async (req, res) => {
    try {
        const mascotas = await ModeloMascota.find();
        res.status(200).json(mascotas);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

export const obtenerMascotaPorId = async (req, res) => {
    try {
        const mascota = await ModeloMascota.findById(req.params.id);
        if (!mascota) return res.status(404).json({ mensaje: "Mascota no encontrada" });
        res.status(200).json(mascota);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

export const actualizarMascota = async (req, res) => {
    try {
        const mascotaActualizada = await ModeloMascota.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!mascotaActualizada) return res.status(404).json({ mensaje: "Mascota no encontrada" });
        res.status(200).json(mascotaActualizada);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

export const eliminarMascota = async (req, res) => {
    try {
        const mascotaEliminada = await ModeloMascota.findByIdAndDelete(req.params.id);
        if (!mascotaEliminada) return res.status(404).json({ mensaje: "Mascota no encontrada" });
        res.status(200).json({ mensaje: "Mascota eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};
