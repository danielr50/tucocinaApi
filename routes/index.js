// defino las rutas de la api
var express = require('express');
var router = express.Router();

var auth = require('../auth/auth');  

// controller
var plato = require('../controllers/platos');
var categoria = require('../controllers/categorias');
var restaurantes = require('../controllers/restaurante');
var ingredientes = require('../controllers/ingredientes');

// HOME
router.get('/', function(req, res){
	res.send('Welcome to API TuCocinaVirtual!');
});

// PLATOS
router.post('/api/platos', plato.addPlato); //agregar plato - POST
router.get('/api/platos', plato.allPlatos); //mostrar platos - GET
router.get('/api/platos/:id', plato.onePlato); //mostrar plato por su ID : GET
router.get('/api/platos_categorias/:id', plato.allPlatosCategorias); //mostrar platos por categorias - GET

//INGREDIENTES
router.post('/api/ingredientes', ingredientes.addIngrediente); //agregar ingrediente - POST
router.get('/api/ingredientes', ingredientes.allIngredientes); //mostrar ingredientes - GET
router.get('/api/ingredientes/:id', ingredientes.allIngredientesPlatos); //mostrar ingredientes - GET

// CATEGORIAS
router.post('/api/categorias',categoria.addCategoria); //agregar categoria - POST
router.get('/api/categorias', categoria.allCategorias); //mostrar categorias - GET

// RESTAURANTES
router.post('/api/restaurantes',restaurantes.addRestaurante); // agregar restaurante - POST
router.get('/api/restaurantes',restaurantes.allRestaurantes); // mostrar restaurantes - GET

// LOGIN
router.post('/auth/login', auth.login);


// exporto el modulo para poder acceder desde afuera
module.exports = router;