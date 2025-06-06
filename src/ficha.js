// crear las rutas de la api para el modulo
import express from "express";
import dbconn from "./conexion.js";
// rutas del modulo aprendiz, instanciar el metodo router de express en la constante aprendiz
const ficha = express.Router();

ficha.get("/ficha/listartodos", async (req, res) => {
  try {
    //consulta
    let consulta = "SELECT * from ficha;";
    // ejecutamos la consulta y guardamos el resultado en una arreglo de objetos
    let [resultado] = await dbconn.query(consulta);
    // respuesta enviada desde el servidor
    res.send({
      estado: "ok",
      data: resultado,
    });
  } catch (error) {
    res.status(500).send({
      estado: "error",
      data: error.code + "=>" + error.message, // code envia el error detallado desde node
    });
  }
});

//...

ficha.get('/ficha/buscarPorId/:id',async(req, res) => {
  try { 
    //recibir el parámetro
    let id = req.params.id
    console.log(id);
    //pendiente
    let consulta = "select * from ficha where id = ?";
    let [resultado] = await dbconn.query(consulta, id);
     res.send({
      estado: "ok",
      data: resultado,
    });
  } catch (error) {
     res.status(500).send({
      estado: "error",
      data: error.code + "=>" + error.message, // code envia el error detallado desde node
    });
   }
 })

//insertar o crear un registro
// usar método post y recojo la información enviada desde el cliente
  ficha.post('/ficha/crear',async(req, res) => {
  try { 
    //recibir la data enviada desde el formulario
    //viene en el body (payload) del request
    let datosFormulario = {
      nombre: req.body.nombre,
      fechainicio: req.body.fechaInicio,
      fechaFinal: req.body.fechaFinal,
      estado:req.body.estado
    }
    //console.log(id);
    //pendiente

    //falta validar la validación de la data
    let consulta = "insert into ficha  set ?";
    let [resultado] = await dbconn.query(consulta, [datosFormulario]);
     res.send({
      estado: "ok",
      data: resultado,
    });
  } catch (error) {
     res.status(500).send({
      estado: "error",
      data: error.code + "=>" + error.message, // code envia el error detallado desde node
    });
   }
 }) 



   ficha.post('/ficha/editar',async(req, res) => {
  try { 
    //recibir la data enviada desde el formulario
    //viene en el body (payload) del request
    let id=req.body.id;
    let datosFormulario = {
      nombre: req.body.nombre,
      fechainicio: req.body.fechaInicio,
      fechaFinal: req.body.fechaFinal,
      estado:req.body.estado
    }
    //console.log(id);
    //pendiente

    //falta validar la validación de la data
    let consulta = "update ficha  set ? where id = ?";
    let [resultado] = await dbconn.query(consulta, [datosFormulario,id]);
     res.send({
      estado: "ok",
      data: resultado,
    });
  } catch (error) {
     res.status(500).send({
      estado: "error",
      data: error.code + "=>" + error.message, // code envia el error detallado desde node
    });
   }
 }) 


    ficha.post('/ficha/eliminar',async(req, res) => {
  try { 
    //recibir la data enviada desde el formulario
    //viene en el body (payload) del request
    let id=req.body.id;
    //console.log(id);
    //pendiente

    //falta validar la validación de la data
    let consulta = "update ficha  set estado = 0 where id = ?";
    let [resultado] = await dbconn.query(consulta, [id]);
     res.send({
      estado: "ok",
      data: resultado,
    });
  } catch (error) {
     res.status(500).send({
      estado: "error",
      data: error.code + "=>" + error.message, // code envia el error detallado desde node
    });
   }
 }) 
 
export default ficha;
