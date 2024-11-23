// ACÁ VA LA LÓGICA DE LOS CONTROLADORES PARA LAS PETICIONES HTTP PARA LOS USUARIOS
// Nos estaremos centrando en las peticiones POST Y GET

// Dependencias y modulos
import { userModel } from "../models/user.model.js";

//DependenciaS de encriptación
import bcrypt from "bcryptjs";

// 2. Crearnos nuestras funciones asíncronas para cada petición
//function nombreFuncion(){}
//let nombreFuncion2 = ()=>{}

// --------------------------------------------------
// Petición POST -> Crear usuarios
export const createUser = async (req, res) => {
    // manejo de errores 
    try {

        // Deestructuración -> nos va a permitir acceder a cada una de las variables suministradas por el usuario en el req.body
        const { image, fullName, email, password, role, phone, isAdult, address, preferences } = req.body;

        // password = ginebra;

        // vamos a encriptar la contraseña
        // .hash -> método para encriptar contraseña
        // 2 parámetros, 1. contraseña a encriptar
        //               2. # que determina cuán segura es la contraseña encriptada -> 8-10
        const codedPassword = await bcrypt.hash(password, 10);

        const newUser = await userModel.create({
            image,
            fullName,
            email,
            password: codedPassword,
            role,
            phone,
            isAdult,
            address,
            preferences

        });

        // 201-> se creó correctamente
        return res.status(201).json({
            mensaje: "Usuario creado correctamente",
            datos: newUser
        });

    } catch (error) {
        return res.status(400).json({
            mensaje: "Ocurrió un error al crear un usuario",
            problema: error.message
        });
    }
};

// -----------------------------------------------

// Petición GET -> Mostrar todos los usuarios
export const showUsers = async (req, res) => {
    // manejo de errores -> atrapar lo que pueda salir mal
    try {
        // Encontrar TODOS los usuarios
        let users = await userModel.find();
        // validación si no se encuentran usuarios almacenados
        if (users.length === 0) {
            return res.status(200).json({
                mensaje: "No hay usuarios almacenados"
            })
        }

        return res.status(200).json({
            menasaje: "Se encontraron usuarios almacenados",
            numeroUsuarios: users.length,
            datos: users
        })

    } catch (error) {
        return res.status(400).json({
            mensaje: "Ocurrió un error al mostrar los usuarios",
            problema: error || error.message
        });
    }
};
//-------------------------------------------------------------
// 1. Usamos  PUT para actualizar los usuarios
// para actualizar un usuario  -> actualizar por ID
export const putUserById = async (request, response) => {

    // Esta es la LÓGICA que usamos de la petición  PUT
    try {
        let idForPut = request.params.id; //el parámetro id del usuario  que queremos actualizar
        let dataForUpdate = request.body; // esto nos permite conectar  la información actualizada

        //2 parámetros, primero el id y luego la info actualizada
        const userUpdated = await userModel.findByIdAndUpdate(idForPut, dataForUpdate);

        // validación cuando el id no es correcto o no existe
        // !productUpdated -> negación de una variable -> no hay nada en esa variable -> falsa
        if (!userUpdated) {
            return response.status(404).json({
                mensaje: 'Lo siento! No se encontró usuario  para actualizar'
            });
        }

        return response.status(200).json({
            mensaje: 'Se actualizó el usuario correctamente',
            datos: userUpdated
        });


    } catch (error) {
        return response.status(400).json({
            mensaje: 'Ocurrió un error actualizando el usuario',
            problem: error || error.message
        });
    }
}
//---------------------------------------------------------------
// Usamos la petición DELETE -> para eliminar usuarios ya no necesarios 
// si necesiramos eliminar un usuario  en particular -> eliminar por ID
export const deleteUserById = async (request, response) => {

    // LÓGICA DE LA PETICIÓN DELETE
    try {
        let idForDelete = request.params.id;
        // lo que se elimina no lo tenemos que guardar en variables
        // escuentreme el producto con ese id y elimínelo
        await userModel.findByIdAndDelete(idForDelete);

        return response.status(200).json({
            mensaje: ' usuario eliminado exitosamnete'
        });

    } catch (error) {
        return response.status(400).json({
            mensaje: 'Ocurrió un error al eliminar producto',
            problem: error.message
        });
    }
}

