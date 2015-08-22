var mongoose = require('mongoose');

//llamo db mongo
exports.conectar = function(err, res){
	// mongoose.connect('mongodb://localhost/tucocinavirtual');// LOCAL
	mongoose.connect('mongodb://tucocinaUser:rootshell@ds035503.mongolab.com:35503/tucocinadb');// REMOTE
	if(err)throw err;
	console.log('Conexión éxitosa a la DB');
}