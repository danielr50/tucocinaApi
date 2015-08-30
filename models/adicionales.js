// Modelo para los adicionales de cada plato

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AdicionalesSchema = new Schema({
	nombreAdicional: String,
	valor: Number,
	idPlato: {type: Schema.ObjectId, ref: 'modelPlato'}
});

module.exports = mongoose.model('modelAdicionales', AdicionalesSchema);