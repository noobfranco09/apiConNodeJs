import 'dotenv/config';
// importamos la libreria
import express from "express"; // es6
import ficha from "./src/ficha.js";




// instanciamos la libreria express en la constante APP (heredamos todos
// los metodos de express)
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// rutas globales
// ruta para el aprendiz
app.use("/", ficha);

//encendemos la api asignandole un puerto
let puerto = process.env.APP_PORT || 4100;
app.listen(puerto, () => {
  console.log(`api ejecutandose en el puerto ${puerto}`);
});
