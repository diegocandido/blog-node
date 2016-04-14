module.exports = function(app) {
	var nweets = app.controllers.nweets;

	app.post("/", nweets.index);
	app.post("/nweets/enviar", nweets.enviar);
};
