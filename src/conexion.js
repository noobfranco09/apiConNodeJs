// importa la libreria que gestiona mariadb o mysql
import 'dotenv/config' 
import mysql from "mysql2/promise";


//creamos el objeto de conexion de acuerdo a la libreria
const dbconn = await mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

// testeamos la conexion
try {
  // metodo de mysql2 que se conecta
  
  await dbconn.connect();
  console.log("conexion exitosa a la BD");
} catch (error) {
  console.log(`Error en la conexion a la BD: ${error}`);
}

//exportamos el modulo
export default dbconn;
