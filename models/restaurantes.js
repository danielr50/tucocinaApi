var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var RestauranteSchema = new Schema({
	usuario: { type: String, required: true, index: { unique: true } },
	password: String,
	nombreRestaurante: String,
	nit: String,
	tipoEstablecimiento: String,
	numMesaReserva: Number,
	logo: String
});		

//correr antes de .save()
RestauranteSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(user.password, salt, function(err, hash) {
      user.password = hash;
      next();
    });
  });

});

RestauranteSchema.methods.comparePassword = function(password, done){
 bcrypt.compare(password, this.password, function(err, isMatch){
   // done(err, isMatch);
  if (err) return done(err);
  done(null, isMatch);
 });
};


module.exports = mongoose.model('modelRestaurante', RestauranteSchema);