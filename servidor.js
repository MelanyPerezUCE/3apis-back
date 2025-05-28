import express, {json} from "express";
import dotenv from "dotenv";
import path from "path";

//Permitimos la conceccion con el .env
dotenv.config();
const PORT = process.env.PORT;

//Iniciamos express
const app = express();


//Para que acepte json
app.use(json());


function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}


// Ruta raíz
app.get ("/",async ( req, res)  => {

    const rndInt = randomIntFromInterval(1, 6);

    var Solicitud = await fetch(`https://www.swapi.tech/api/people/${rndInt}`, {
            method: "GET",  // Cambiar a POST
            headers: {
                "Content-Type": "application/json"  // Especificamos que los datos están en formato JSON
            }     
        });

        var Respuesta_Servidor = await Solicitud.json();
        console.log(Respuesta_Servidor.result.properties.name)
        console.log(Respuesta_Servidor.result.properties.skin_color)
        console.log(Respuesta_Servidor.result.properties.eye_color)



    var Solicitud1 = await fetch(`https://api.chucknorris.io/jokes/random`, {
            method: "GET",  // Cambiar a POST
            headers: {
                "Content-Type": "application/json"  // Especificamos que los datos están en formato JSON
            }     
        });

        var Respuesta_Servidor1 = await Solicitud1.json();
        console.log(Respuesta_Servidor1.value)

        var Solicitud2 = await fetch(`https://purr.woody.cat`, {
            method: "GET",  // Cambiar a POST
            headers: {
                "Content-Type": "application/json"  // Especificamos que los datos están en formato JSON
            }     
        });

        var Respuesta_Servidor2 = await Solicitud2.json();
        console.log(Respuesta_Servidor2.Image)
 
    res.status(200).json({
            Estado: 200,
            Respuesta: {
                Nombre: Respuesta_Servidor.result.properties.name,
                Color_Piel: Respuesta_Servidor.result.properties.skin_color,
                Color_Ojos: Respuesta_Servidor.result.properties.eye_color,
                Chiste: Respuesta_Servidor1.value,
                Imagen: Respuesta_Servidor2.Image
            }
        });
});




app.listen(PORT, () => {
    console.log(`Servidor Activo http://localhost:${PORT}`);
});
