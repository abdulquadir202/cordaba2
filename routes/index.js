var env = require('../env'),
	config = require('../config/'+env.name),
	Client = require('node-rest-client').Client,
    client = new Client();

module.exports.index = index;

function index (req, res) {
res.render('index', {
	layout:'layout',
	title:'home page'
});
};

module.exports.about = about;

function about (req, res) {
res.render('about', {
	layout:'layout',
	title:'about page'
});
};

module.exports.contact = contact;

function contact (req, res) {
res.render('contact', {
	layout:'layout',
	title:'contact page'
});
};

module.exports.services = services;

function services(req,res) {
	var meCallback = function(error, data){
		if(data && data.error == undefined){
			res.render('services',{
				layout:'layout',
				title:'services',
				item: data.data
			});
		}else{
			res.render('500',{
				layout:'layout',
				title:'Server Error'
			});
		}
	}
	var args = {
	  headers: { "Content-Type": "application/json", "Accepts":"application/json"}
	};
	var url =  config.api.url + "/api/items?apikey="+ config.api.key;
	var req = client.get(url, args, function (data, response) {
		if (data && data.error == undefined){
			console.log(JSON.stringify(data));
			meCallback(null, data);
		}else{
			console.log(JSON.stringify(data));
			meCallback(data.error, null);
		}
	});
	
};


module.exports.blog = blog;
function blog(req,res) {
	var meCallback = function(error, data){
		if(data && data.error == undefined){
			res.render('blog',{
				layout:'layout',
				title:'blog',
				blog: data.data
			});
		}else{
			res.render('500',{
				layout:'layout',
				title:'Server Error'
			});
		}
	}
	var args = {
	  headers: { "Content-Type": "application/json", "Accepts":"application/json"}
	};
	var url =  config.api.url + "/api/blogs?apikey="+ config.api.key;
	var req = client.get(url, args, function (data, response) {
		if (data && data.error == undefined){
			console.log(JSON.stringify(data));
			meCallback(null, data);
		}else{
			console.log(JSON.stringify(data));
			meCallback(data.error, null);
		}
	});
	
};