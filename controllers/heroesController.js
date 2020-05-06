const fs = require('fs');


const heroesController = {
    index: function(req, res){
        let heroes = fs.readFileSync('science.json', "utf8");
        heroes = JSON.parse(heroes);
        res.send(heroes);
    }

}

module.exports = heroesController;