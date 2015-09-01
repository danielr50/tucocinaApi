var mongoose = require('mongoose');
var path = require('path');

// insertar modelo Categorias
var Promos = mongoose.model('modelPromociones');

// CRUD promociones
//****************

exports.addPromo = function(req, res){
	var promo = new Promos({
		nombrePromo: req.body.nombrePromo,
		precio: req.body.precio,
		estado: req.body.estado,
		imagen: req.body.imagen
	});

	console.log(req.body);
	promo.save(function(err, data){
		if(err){ return res.send({message: 'Error al guardar promo'})}
		console.log('se guardo su promo'+ promo.nombrePromo);
		return res
			.status(200)
			.send({promo: promo });	
	});
};


exports.allPromos = function(req, res){
	Promos.find(function(err, promos){
		if (err) send(err);
		res.json(promos);
	});
}