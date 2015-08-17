var mongoose = require	('mongoose');
var path = require('path'); //para hacer el populate, por si lo llego a necesitar

var Restaurante = mongoose.model('modelRestaurante');

// crud restaurantes

// agregar restaurante - POST
exports.addRestaurante = function(req, res){
	// objeto restaurante
	var restaurante = new Restaurante({
		usuario: req.body.usuario,
		password: req.body.password,
		nombreRestaurante: req.body.nombreRestaurante,
		nit: req.body.nit,
		tipoEstablecimiento: req.body.TipoEstablecimiento,
		numMesaReserva: req.body.numMesaReserva,
		logo: req.body.logo
	});

	restaurante.save(function(err, data){
		if (err) {return res.send({message: 'Error al almacenar los datos'}) }//Si hubo error
		console.log('Se agregó el restaurante: '+ restaurante.nombreRestaurante);
		return res
				.status(200)
				.send({restaurante: restaurante});
	});	
}


// mostrar los restaurantes - GET
exports.allRestaurantes = function(req, res){
	Restaurante.find(function(err, restaurantes){
		if(err) res.send(err);
		res.json(restaurantes);
	});
}

