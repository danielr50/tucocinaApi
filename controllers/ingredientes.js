var mongoose = require('mongoose');
var path = require('path');

var Platos = mongoose.model('modelPlato');
var Ingredientes = mongoose.model('modelIngrediente');


// CRUD Ingredientes
//****************

//agregar ingredientes - POST
exports.addIngrediente = function(req, res){
	// creo l objeto para almacenar
	var ingrediente = new Ingredientes({
		nombreIngrediente: req.body.nombreIngrediente,
		idPlato: req.body.idPlato
	});

	ingrediente.save(function(err, data){
		if (err) {return res.send({message: 'Error al almacenar los datos'}) }//Si hubo error
		console.log('Se agregó el ingrdiente: '+ ingrediente.nombreIngrediente);

		// evento socket.io
		var socketio = req.app.get('socketio'); // tacke out socket instance from the app container
		socketio.sockets.emit('ingrediente', data); // emit an event for all connected clients

		return res
				.status(200)
				.send({ingrediente: ingrediente});
	});
}//fin addingrediente

// mostrar todas los ingredientes asociados a un plato
exports.allIngredientes = function(req, res){
	Ingredientes.find(function(err, ingrediente){
		res.json(ingrediente);
	});
}

// muestra los ingredientes de un plato en especifico
exports.allIngredientesPlatos = function(req, res){
	Ingredientes.find({idPlato: req.params.id}, function(err, ingredientes){
		res.json(ingredientes);
	});
}