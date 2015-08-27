var mongoose = require	('mongoose');
var path = require('path');

var Pedidos = mongoose.model('modelPedidos');

// CRUD pedidos
//****************

// agregar pedido - POST
exports.addPedido = function(req, res){
	// crel el objeto pedido
	var pedido = new Pedidos({
		pedido: req.body.pedido,
		precio: req.body.precio,
		mesa: req.body.mesa,
		cantidad: req.body.cantidad
	});

	console.log(req.body);

	pedido.save(function(err, data){
		if (err) {return res.send({message: 'Error al almacenar los datos'}) }//Si hubo error
		console.log('se guardo su pedido: '+ pedido.plato);
		return res
				.status()
				.send({pedido: pedido});
	});
}