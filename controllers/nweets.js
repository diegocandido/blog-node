module.exports = function(app){

	var Nweets = app.models.nweets;

	var NweetController = {
		index: function(req,res){
			Nweets.find(function(err,dados){
				if(err){
					console.log('Erro');
				}
				res.render('index', {lista: dados});
			});
		},
		enviar: function(req,res){
			var model = new Nweet(req.body);
						model.save(function(err){
							if(err){
								console.log(err);
							}
							res.redirect("index");
						});
		}
	}

	return NweetController;
};
