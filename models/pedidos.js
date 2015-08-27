// Modelo para los pedidos realizados por el usuario

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PedidosSchema = new Schema({
	plato: String,
	precio: Number,
	mesa: Number,
	cantidad: Number,
	ingredientes: String,
	adicionales: String
});

module.exports = mongoose.model('modelPedidos', PedidosSchema);