var config = {
	port: 3004,
	secret: '0d983fd5c168a969e13ddf2a99666455', 
	defaults:{
		psize: 3000
	}, 
	api:{
		url: 'http://localhost:8088', 
		key: 'd2a0f92c-1934-4a89-b7bb-628a06fff7d7'  
	},
	redis: {
		url:'redis://localhost:6379'
	}
};

module.exports = config;
