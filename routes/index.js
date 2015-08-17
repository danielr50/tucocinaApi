// defino las rutas de la api
var express = require('express');
var router = express.Router();

// controller
var plato = require('../controllers/platos');
var categoria = require('../controllers/categorias');

// ruta home
router.get('/', function(req, res){
	res.send('Welcome to API TuCocinaVirtual!');
});

// ruta para platos
router.post('/api/platos', plato.addPlato); //agregar plato - POST
router.get('/api/platos', plato.allPlatos); //mostrar platos - GET

// ruta para las categorias
router.post('/api/categorias',categoria.addCategoria); //agregar categoria - POST
router.get('/api/categorias', categoria.allCategorias); //mostrar categorias - GET




// exporto el modulo para poder acceder desde afuera
module.exports = router;