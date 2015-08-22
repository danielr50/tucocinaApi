// Modelo para los ingredientes de un plato

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IngredienteSchema = new Schema({
	nombreIngrediente: String,
	idPlato: {type: Schema.ObjectId, ref: 'modelPlato'}
});

module.exports = mongoose.model('modelIngrediente', IngredienteSchema);