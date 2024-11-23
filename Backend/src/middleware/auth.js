// 1. importar dependencias y modulos 
import { verifyToken } from "../lib/jwt.js";

// 2. Crearnos el MIDDLEWARE que nos permita usar la función para verificar el token
// 2.1 Verigficar que existe un token generado 
// 2.2 Verificar que el token sea permitido, que tenga la estructura alfa númerica 
// 2.3 Validar el rol -> Verificar permisos

function auth (requiredRol) { // esta es una funtion declarativa "ojo"
        return async (request, response, next) => {
            // Verificación 1: Existencia del token --------------
            // Aqui estamos accediendo al token generando en caso si existiera 
            let token = request.headers["authorization"];
            console.log ( " token obtenido de la cabecera" + token);
            if (!token){
                return response.status(401).json({
                    mensaje: "no se encontró token,  sorry! "
                })
                
            }

        // Verificación 2: Que el token sea permitido
        // bearer eweeewewewewewewr4rregregtrg
        // vamos a quitar el bearer para poder verificar bien el token 
        token = token.split(" ")[1];
        console.log("Token despues de separalo del bearer" + token);

        // Manejo de errores
        try {
            const decoded = await verifyToken(token);
            console.log("token decodificado" , decoded);
            // Validación 3: Verificar rol 
            // si se requiere arol de admin -> requiredRole === "admin"
            // Pero si el usuario NO es admin 
            // Mensaje de que no tiene permisos para esta petición
            if(requiredRol === "admin" && !decoded.isAdmin ){
                return response.status(401).json({
                    mensaje: " acceso no permitido, sorry! no es administrador"
                })

            }
        // es guardar la info decodificada en la petición
        request. user = decoded;

        }catch (error){
            return response.status(400).json ({
            mensaje: "fallo la autenticación del token",
            problema: error.message || error
            });  
        }
        // indica que debe continuar con el siguiente proceso
        next();
        }
}


// 3. Exportarlo -> asi exportarmos o solo le ponemos export a la function anterior 

export default auth; 
