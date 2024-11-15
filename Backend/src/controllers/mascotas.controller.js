//The controllers - gestionan la logica d elas peticiones 
// La logica para GET, POST, PUT, DELETE ( leer, crear, actializar, eliminar)
// 1. importar el modelo de datos que manipularemos 


import {productModel } from "../models/product.model.js";

// petición POST -> para crear productos
// FUNCTION FLECHA
export const postProduct = async (request,response) => {
     // Logica de la peticion  POST
     try {
        // para yo crear -> necesito enviar información
        // las peticiones tienen un cuerpo -> la información la enviamos al cuerpo d ela petición -> body
        // Asi creamos colecciones en ela base de datos 
       const newProduct = await productModel.create(request.body); 
       return response.status(201).json({
        mensaje: "el producto se creó satisfactoriamente",
        datos: newProduct
       });
       
    } catch (error) {
        return response.status(400).json({
            mensaje: "ocurrio un error al crear un producto",
            Problem: error || error.message
        })
    }
}
// petición GET ->  para mostrar productos
export const getProduct = async (request,response) => {

    // Logica de la GET

    try{
        // el metodo find lo wue hace es mostrarme lo que encuentra en la base de datos
    let products = await productModel.find();
    // podemos agregar validaciones 
    // Qué pasa si no hay nada almacenado en la base de datos 
    if(products.length === 0){
        return response.status(200).json({
            mensaje: "No se encontraron productos en la bases de datos"

        });
    }
    // si si tineen productos guardados, que me los muestre
    return response.status (200).json({
        mensaje: " estos son los productos encontrados",
        datos: products
    })
    } catch(error) {
        return response.status(400).json({
        mensaje: "ocuerrio un error al buscar productos",
        Problem: error || error.message
        })

    }
}
// petición PUT -> para para actualizar productos
// acualizar un producto en particular lo actualizo por su ID -> ACTUALIZAR POR iD
export const putProductById = async (request,response) => {
  // Logica de la petición PUT
    try {
        let idForput = request.params.Id; // el parametro de id del producto que queremos actualizar 
        let dataForupdate = request.body; // pasarle la informacion actualizada
                      // Parametros , primero 

        const productUpdated = await productModel.findByIdAndUpdate(idForput,dataForupdate);
        // validación cuando el id no es correcto o  no existe
        // !productupdate -> negación de una variable -> no hay nada en esa variable -> falsa
        if (!productUpdated){
            return response.status(404).json({
                mensaje: "lo siento! No se encontró producto para actualizar"
            });
        }
        return response.status(200).json({
            mensaje: "se actualizo el producto correctamente",
            datos: productUpdated
        });

    } catch (error) {
        return response.status(400).json({
          mensaje: "ocurrio un error al actualizar producto",
          problem: error || error.message

        });
    }
}

// petición DELETE -> para eliminar productos 
// eliminamos un producto en particular  -> eliminar ID

               // Logica de la peticion Delete
               
export const deleteProductById = async (request,response) => {
    // Logica de la peticion DELETE
 try{
    let idForDelete = request.params.Id;
    // lo que se elimina no lo tenemos que guardar en variables
    //encuentreme el producto con ese id y eliminelo 
      await productModel.findByIdAndDelete(idForDelete);
      return response.status(200).json({
        mensaje: " productos eliminados correctamente "
      })


 } catch (error) {
    return response.status(400).json({
        mensaje: "ocurrio un error al eliminar el  producto",
        problem: error || error.message

      });
 }

    
}
