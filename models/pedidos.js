// Modelo para los pedidos realizados por el usuario

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PedidosSchema = new Schema({
	pedido: Array,
	precioFinal: Number
});

module.exports = mongoose.model('modelPedidos', PedidosSchema);