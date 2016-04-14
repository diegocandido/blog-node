var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

module.exports = function() {

	var nweetsSchema = new Schema({
		titulo: {
			type: String,
			trim: true
		},
		texto: {
			type: String,
			trim: true
		},
		data: {
			type: Date,
			default: Date.now
		},
	});

	return mongoose.model('nweets', nweetsSchema);
};
