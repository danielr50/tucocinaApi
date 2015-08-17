var mongoose = require('mongoose');
var path = require('path');

var Platos = mongoose.model('modelPlato');
var Categorias = mongoose.model('modelCategoria');

// CRUD plato
//****************

// agregar plato - POST
exports.addPlato = function(req, res){
	// aca irian las validaciones inicialmente

	// creo el objeto plato con los datos que envia el cliente
	var plato = new Platos({
		nombrePlato: req.body.nombrePlato,
		descripcion: req.body.descripcion,
		valor: req.body.valor,
		estado: req.body.estado,
		// idCategoria: req.body.idCategoria,
		imagen: req.body.imagen
	});

	// ejecuto la funcion save para almacenar el objeto  plato
	plato.save(function(err, data){
		if (err) {return res.send({message: 'Error al almacenar los datos'}) }//Si hubo error

		console.log('Se agregó el plato: '+ plato.nombrePlato);
		return res
				.status(200)
				.send({plato: plato});
	});
} //fin addPlato

// mostrar todos los platos - GET
exports.allPlatos = function(req, res){
	Platos.find(function(err, platos){
		res.json(platos);
	});
} //fin allPlatos