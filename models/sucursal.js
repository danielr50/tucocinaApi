// Modelo para las sucursales de los restarantes

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SucursalSchema = new Schema({
	telefono: String,
	direccion: String,
	pais: String,
	ciudad: String,
	idRestaurante: {type: Schema.ObjectId, ref: 'modelRestaurante'}
});

module.exports = mongoose.model('modelSucursal', SucursalSchema);