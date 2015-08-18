var mongoose = require('mongoose');

//llamo db mongo
exports.conectar = function(err, res){
	mongoose.connect('mongodb://localhost/tucocinavirtual');// LOCAL

	if(err)throw err;
	console.log('Conexión éxitosa a la DB');
}