const express = require("express");                                         // Se requiere el módulo express
const router = express.Router();                                            // Se guarda la ejecución del método Router para modularizar todo el sistema de ruteo
const homeController = require("../controllers/homeController");            // Se requiere el objeto homeController que proveerá las funcionalidades y consecuencias para la página home

router.get("/", homeController.index);                                      // Se relaciona el request de la página home con las funcionalidades del módulo requerido

module.exports = router;                                                    // Exportamos las adiciones hechas al objeto 