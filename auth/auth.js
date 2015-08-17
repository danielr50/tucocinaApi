// funciones controlador auth.js
var mongoose = require('mongoose');
// probar con mongoose.model('User'); CASA ADOLFO	
var Restaurante = require('../models/restaurantes');
//para crear el token uso este service
var service = require('../service/token');
var bcrypt = require('bcrypt');

var request = require('request');

var request = require('request');
var qs = require('querystring');
var config = require('../config');

// funcion para ingresar al sistema
exports.login = function(req, res){
	Restaurante.findOne({usuario: req.body.usuario}, function(err, user){
		if (err) next(err);
		if(!user) {return res.status(401).send({message: 'No existe ese usuario'})}

		user.comparePassword(req.body.password, function(err, entra){
			if (err) throw err;
			if(!entra){return res.status(401).send({message: "Contraseña incorrecta"})}

			return res
				.status(200)
				.send({ userId: user._id, token: service.createToken(user) });
		});
	});
}

