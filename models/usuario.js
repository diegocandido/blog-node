var mongoose = require('mongoose');

module.exports = function(){

	var usuarioSchema = mongoose.Schema({
			nome       : {type: String, required: true, trim: true, unique: true},
			nickname   : {type: String, trim: true},
      email      : {type: String, required: true, trim: true, unique: true},
      senha      : {type: String, required: true, trim: true, unique: true},
			data       : {type: Date, default: Date.now},
	});

	return mongoose.model('usuarios', usuarioSchema);
}
