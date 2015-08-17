var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var platoSchema = new Schema({
	nombrePlato: String,
	descripcion: String,
	valor: Number,
	estado: String,
	idCategoria: {type: Schema.ObjectId, ref: 'modelCategoria'},
	imagen: String
});

module.exports = mongoose.model('modelPlato', platoSchema);