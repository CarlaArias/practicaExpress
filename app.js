const express = require("express");                         // Una vez instalado Express, se requiere la libreria que devuelve una función que encapsula todas las funcionalidades del framework
const app = express();                                      // Se ejecuta la función que retorna un objeto con múltiples propiedades y métodos

const homeRoutes = require("./routes/home");                // Se requieren los módulos creados en los archivos de la carpeta routes 
const heroesRoutes = require("./routes/heroes");
const creditosRoutes = require("./routes/creditos");

app.listen(3030, () => console.log("Running on 3030"));     // Se levanta el servidor en el puerto 3030



app.use("/", homeRoutes)                                    // Se relaciona la solicitud del recurso con las rutasadd pertinentes
app.use("/heroes", heroesRoutes);
app.use("/creditos", creditosRoutes);