// Admin controller
// Aqui ponemos LA LÓGICA DE LOS CONTROLADORES PARA LAS PETICIONES HTTP PARA LOS USUARIOS
// Nos estaremos centrando en las peticiones POST Y GET

// 1. Importar dependencias y módulos que necesitemos
import { adminUserModel } from "../models/admin.model";
// Importar la dependenciade encriptación
import bcrypt from "bcryptjs";

// 2. Crearnos nuestras funciones asíncronas para cada petición
//function nombreFuncion(){}
//let nombreFuncion2 = ()=>{}


// --------------------------------------------------
// Petición POST -> Crear usuarios
export const createAdmin = async (req, res) => {
  // manejo de errores -> atrapar lo que pueda salir mal
  try {

    // Deestructuración -> nos va a permitir acceder a cada una de las variables suministradas por el usuario en el req.body
    const {fullName, email, password, role} = req.body;

    // password = sancocho;

    // vamos a encriptar la contraseña
    // .hash -> método para encriptar contraseña
    // 2 parámetros, 1. contraseña a encriptar
    //               2. # que determina cuán segura es la contraseña encriptada -> 8-10
    const codedPassword = await bcrypt.hash(password, 10);

    const newAdmin = await adminModel.create({
        fullName,
        email,
        password:codedPassword,
        role
    });

    // 201-> se creó correctamente
    return res.status(201).json({
        mensaje: "admin creado correctamente",
        datos: newAdmin
    });

  } catch (error) {
    return res.status(400).json({
        mensaje: "Ocurrió un error al crear un usuario",
        problema: error || error.message
    });
  }
};


// -----------------------------------------------

// Petición GET -> Mostrar todos los usuarios
export const showAdmin = async (req, res) => {
  // manejo de errores -> atrapar lo que pueda salir mal
  try {
    // Encontrar TODOS los usuarios
    let admin = await adminModel.find();
    // validación si no se encuentran usuarios almacenados
    if(admin.length === 0){
        return res.status(200).json({
            mensaje: "No hay usuarios almacenados"
        })
    }

    return res.status(200).json({
        menasaje: "Se encontraron usuarios almacenados",
        numeroAdmin: admin.length,
        datos: admin
    })

  } catch (error) {
    return res.status(400).json({
        mensaje: "Ocurrió un error al mostrar los usuarios",
        problema: error || error.message
    });
  }
};