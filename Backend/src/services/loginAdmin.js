// En este archivo estaremos haciendo toda la lógica necesaria para gestionar los inicios de sesión de los usuarios}
// PUEDE QUE ESTA LÓGICA CAMBIE PARA CADA PROYECTO FINAL

// 1. Importar dependencias y módulos
// necesitamos el modelo para poder ir a la base de datos y verificar correo y contraseña
import { adminModel } from "../models/admin.model.js";
// importar la función que nos creamos para generar tokens
import { generateToken } from "../lib/jwt.js";
// Para poder comparar la contraseña que ingreso con la encriptada, necesito la dependencia bcrypjs
import bcrypt from "bcryptjs";

// 2. Nos creamos una función para gestionar el inicio de sesión

const loginAdmin = async (request, response) => {
    // Manejos de los errores

    // Cuando iniciemos sesión satisfactoriamente y se genera el token
    try {
        // VALIDACIÓN 1: CORREO ---------------------------------------------------------
        const { emailLogin, passwordLogin } = request.body;

        // 1. buscar si emailLogin existe en la base de datos
        // Me devuelve el usuario y toda su información y me la guarda en la variables
        const adminFound = await adminModel.findOne({
            email: emailLogin,
        });

        // acá indicamos qué passa si no se encuentra emailLogin en la base de datos
        if (!adminFound) {
            // 404 -> no encontrado
            return response
                .status(404)
                .json({ mensaje: "Usuario no encontrado, por favor registrarse" });
        }

        // VALIDACIÓN 2: CONTRASEÑA ------------------------------------------------------
        //  Comparar passwordLogin con la contraseña almacenada en la base de datos
        // true or false
        // .compare -> 2 parámetros, 1. passwordLogin y 2. la contraseña de mi usuario encontrado en la base de datos
        const isValidPassword = await bcrypt.compare(
            passwordLogin,
            adminFound.password
        );

        if (!isValidPassword) {
            // 401-> no autorizado
            return response.status(401).json({ mensaje: "Contraseña incorrecta" });
        }

        // Validación 3
        // VERIFICAR PERMISOS ----------------------------------------------------------
        // TODOS MIS USUARIOS TENGAS ESTA INFO EN SU TOKEN
        const payload = {
            id: adminFound._id,
            name: adminFound.fullName,
            isAdmin: true
        };
        // GENERAR EL TOKEN -----------------------------------------------
        // pasamos la info del usuario si es cliente o admin, en el payload
        const token = await generateToken(payload);

        // Si TODO salio bien, las credenciales son correctas, y se generó token
        return response.status(200).json({
            mensaje: "Inicio de sesión exitoso",
            tokenGenerado: token, //ESTO ES UNA MALA PRÁCTICA, SÓLO LO HACEMOS PARA PROBAR
        });
    } catch (error) {
        // Cuando no se pudo iniciar sesión por algún error y NO se genera token
        return response.status(400).json({
            mensaje: "Hubo un error al iniciar sesión",
            error: error.message || error,
        });
    }
};

// 3. exportar la función
export default loginAdmin;
