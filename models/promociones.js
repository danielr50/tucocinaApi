var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var PromocionesSchema = new Schema({
	nombrePromo: { type: String, required: true, index: { unique: true} },
	precio: Number,
	estado: String,
	imagen: String
});


module.exports = mongoose.model('modelPromociones', PromocionesSchema);