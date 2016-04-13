var mongoose = require('mongoose');

module.exports = function(){

	var nweetsSchema = mongoose.Schema({
			titulo   : {type: String, trim: true},
			texto    : {type: String, trim: true},
			data     : {type: Date, default: Date.now},
	});

	return mongoose.model('nweets', nweetsSchema);
}
