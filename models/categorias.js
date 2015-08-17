var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categoriaSchema = new Schema({
	nombreCategoria: String
});

module.exports = mongoose.model('modelCategoria', categoriaSchema);