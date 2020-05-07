const fs = require('fs');

var science = fs.readFileSync('science.json', "utf8");
science = JSON.parse(science);


const heroesController = {
    index: function(req, res){
        res.send(science);
    },

    show: function(req, res){
        let arrayConObjetoCorrecto = science.filter(function(objeto){
            return req.params.id == objeto.id;
        });
        if (arrayConObjetoCorrecto[0] != undefined){
            res.send("Hola, mi nombre es " + arrayConObjetoCorrecto[0].nombre + " y soy " + arrayConObjetoCorrecto[0].profesion);
        }else{
            res.send("​No encontramos al científico indicado. Por favor, elija otro id​");

        }          
    }
}



module.exports = heroesController;

