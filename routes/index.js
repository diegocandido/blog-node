module.exports = function(app) {
	var nweets = app.controllers.nweets;

	app.get("/", nweets.index);
};
