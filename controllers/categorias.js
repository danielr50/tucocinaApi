var mongoose = require('mongoose');
var path = require('path');

var Platos = mongoose.model('modelPlato');
var Categorias = mongoose.model('modelCategoria');

// CRUD categoria
//****************

//agregar categoria - POST
exports.addCategoria = function(req, res){
	// creo l objeto para almacenar
	var categoria = new Categorias({
		nombreCategoria: req.body.nombreCategoria
	});

	categoria.save(function(err, data){
		if (err) {return res.send({message: 'Error al almacenar los datos'}) }//Si hubo error
		console.log('Se agregó la categoria: '+ categoria.nombreCategoria);
		return res
				.status(200)
				.send({categoria: categoria});
	});
}//fin addCategoria

// mostrar todas las categorias
exports.allCategorias = function(req, res){
	Categorias.find(function(err, categorias){
		res.json(categorias);
	});
}

