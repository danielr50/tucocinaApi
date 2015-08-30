var mongoose = require	('mongoose');
var path = require('path');

var Adicionales = mongoose.model('modelAdicionales');
var Platos = mongoose.model('modelPlato');


exports.addAdicionales = function(req, res){
	var adicional = new Adicionales({
		nombreAdicional: req.body.nombreAdicional,
		valor: req.body.valor,
		idPlato: req.body.idPlato
	});

	adicional.save(function(err, data){
		if (err) {return res.send({message: 'Error al almacenar los datos'}) }//Si hubo errorreturn res
		return res
			.status(200)
			.send({adicional: adicional});
	});
}

exports.adicional = function(req, res){
	Adicionales.find({idPlato: req.params.id}, function(err, adicionales){
		if(err) res.send(err);
		res.json(adicionales);
	});
}	