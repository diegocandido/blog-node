module.exports = function(app){
	var nweets = app.controllers.nweets;

	app.post("/nweets/enviar", nweets.enviar);
}
