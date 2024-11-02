// este archivo nos permite crear las rutas para poder hacer las peticiones GET, POST, PUT, DELETE

// 1. IMPORTAR MIS CONTROLADORES Y LAS DEPENDENCIAS 
import { getProduct, postProduct, deleteProductById, putProductById} from "../controllers/product.controller.js";
import express from "express"; // tambien nos ayuda hacer las rutas para las peticiones


// 2. VAMOS A CONFIGURAR EL ROUTER DE EXPRESS 
export const productRouter = express.Router ();

//3. Crearme las rutas para las peticiones de mis productos 


// Ruta para la petición GET -> leer, obtener, mostrar
// primero determino la ruta, luego le indico qué debe hacer ( el controlador que debe usar)
productRouter.get ("/obtener", getProduct)

// Ruta para la petición POST -> crear 
productRouter.post ("/crear", postProduct)

// Ruta para la petición PUT -> actualizar 
productRouter.put ("/actualizar/:Id", putProductById)

// Ruta para la petición  DELETE -> eliminar 
productRouter.delete ("/eliminar/:Id", deleteProductById)

