var express = require('express'),
partials = require('express-partials'),
app = express(),
errorHandlers = require('./middleware/errorhandlers'),
<<<<<<< HEAD
env = require('./env'),
config= require('./config/' + env.name),
=======
>>>>>>> abff7e1ad9e5176dee2a42b33c974514995cdbca
routes = require('./routes');

app.set('view engine', 'ejs');
app.set('view options', {defaultLayout: 'layout'});
app.use(express.static(__dirname + '/static'));
app.use(partials());

app.get('/', routes.index);
app.get('/about', routes.about);
<<<<<<< HEAD
app.get('/services', routes.services);
app.get('/services/:uname', routes.servicesDetail);
app.get('/contact', routes.contact);
app.get('/blog', routes.blog);
app.get('/blog/:uname', routes.blogDetail);

=======
app.get('/service', routes.service);
app.get('/contact', routes.contact);
app.get('/blog', routes.blog);
>>>>>>> abff7e1ad9e5176dee2a42b33c974514995cdbca

app.get('/error', function(req, res, next){
 	next(new Error('A contrived error'));
});
app.use(errorHandlers.error);
app.use(errorHandlers.notFound);

<<<<<<< HEAD
app.listen(config.port);
	console.log('server running on config config' + config.port);
=======
app.listen(3005)
	console.log('server running port 3005');
>>>>>>> abff7e1ad9e5176dee2a42b33c974514995cdbca
