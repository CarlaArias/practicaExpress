const express = require("express");                         // Se requiere el framework express instalado con npm
const app = express();                                      // La ejecución de express devuelve una función que encapsula todas las funcionalidades del framework

const homeRoutes = require("./routes/home");                // Se hace uso del objeto router de home.js 
const heroesRoutes = require("./routes/heroes");
const creditosRoutes = require("./routes/creditos");

app.listen(3030, () => console.log("Running on 3030"));



app.use("/", homeRoutes)                                    // Se relaciona la ruta con las funcionalidades pertinentes
app.use("/heroes", heroesRoutes);
app.use("/creditos", creditosRoutes);