'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users.server.controller');
	var categories = require('../../app/controllers/categories.server.controller');

	// Categories Routes
	app.route('/categories')
		.get(users.requiresLogin, categories.list)
		.post(users.requiresLogin, categories.create);

	app.route('/categories/canedit/:categoryId')
		.get(users.requiresLogin, categories.canedit);

	app.route('/categories/locktable/:categoryId')
		.get(users.requiresLogin, categories.canedit);

	app.route('/categories/unlocktable/:categoryId')
		.get(users.requiresLogin, categories.canedit);


	app.route('/categories/import')
		.get(function(req, res) { res.status(404); })
		.post(users.requiresLogin, categories.importCategories);

	app.route('/categories/:categoryId')
		.get(users.requiresLogin, categories.read)
		.put(users.requiresLogin, categories.hasAuthorization, categories.update)
		.delete(users.requiresLogin, categories.hasAuthorization, categories.delete);

	// Finish by binding the Category middleware
	app.param('categoryId', categories.categoryByID);
};
