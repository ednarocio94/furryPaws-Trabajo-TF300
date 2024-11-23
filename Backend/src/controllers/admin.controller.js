// ACÁ VA LA LÓGICA DE LOS CONTROLADORES PARA LAS PETICIONES HTTP PARA LOS administradores
// Nos estaremos centrando en las peticiones POST Y GET

// Dependencias y modulos
import { adminModel } from "../models/admin.model.js";

//DependenciaS de encriptación
import bcrypt from "bcryptjs";

// 2. Crearnos nuestras funciones asíncronas para cada petición
//function nombreFuncion(){}
//let nombreFuncion2 = ()=>{}

// --------------------------------------------------
// Petición POST -> Crear administradores
export const createAdmin = async (req, res) => {
    // manejo de errores 
    try {

        // Deestructuración -> nos va a permitir acceder a cada una de las variables suministradas por el usuario en el req.body
        const { image, fullName, email, password, role} = req.body;

        // password = ginebra;

        // vamos a encriptar la contraseña
        // .hash -> método para encriptar contraseña
        // 2 parámetros, 1. contraseña a encriptar
        //               2. # que determina cuán segura es la contraseña encriptada -> 8-10
        const codedPassword = await bcrypt.hash(password, 10);

        const newAdmin = await adminModel.create({
            image,
            fullName,
            email,
            password: codedPassword,
            role
        });

        // 201-> se creó correctamente
        return res.status(201).json({
            mensaje: "Administrador creado correctamente",
            datos: newAdmin
        });

    } catch (error) {
        return res.status(400).json({
            mensaje: "Ocurrió un error al crear un Administrador",
            problema: error.message
        });
    }
};

// -----------------------------------------------

// Petición GET -> Mostrar todos los administradores
export const showAdmin = async (req, res) => {
    // manejo de errores -> atrapar lo que pueda salir mal
    try {
        // Encontrar TODOS los administradores
        let admins = await adminModel.find();
        // validación si no se encuentran administradores almacenados
        if (admins.length === 0) {
            return res.status(200).json({
                mensaje: "No hay administradores almacenados"
            })
        }

        return res.status(200).json({
            menasaje: "Se encontraron Administradores almacenados",
            numeroAdministradores: admins.length,
            datos: admins
        })

    } catch (error) {
        return res.status(400).json({
            mensaje: "Ocurrió un error al mostrar los administradores",
            problema: error.message
        });
    }
};

//---------------------------------------------------------------
// Usamos la petición DELETE -> para eliminar administradores ya no necesarios 
// si necesiramos eliminar un usuario  en particular -> eliminar por ID
export const deleteAdminById = async (request, response) => {

    // LÓGICA DE LA PETICIÓN DELETE
    try {
        let idForDelete = request.params.id;
        // lo que se elimina no lo tenemos que guardar en variables
        // escuentreme el producto con ese id y elimínelo
        await adminModel.findByIdAndDelete(idForDelete);

        return response.status(200).json({
            mensaje: ' Administrador eliminado exitosamnete'
        });

    } catch (error) {
        return response.status(400).json({
            mensaje: 'Ocurrió un error al eliminar Administrador',
            problem: error.message
        });
    }
}

