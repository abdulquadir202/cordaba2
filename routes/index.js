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

module.exports.service = service;

function service (req, res) {
res.render('service', {
	layout:'layout',
	title:'service page'
});
};

module.exports.blog = blog;

function blog (req, res) {
res.render('blog', {
	layout:'layout',
	title:'blog page'
});
};