const fs = require('fs');

var heroes = fs.readFileSync('science.json', "utf8");
heroes = JSON.parse(heroes);


const heroesController = {
    index: function(req, res){
        res.send(heroes);
    },


    show: function(req, res){
        
    }
}



module.exports = heroesController;

