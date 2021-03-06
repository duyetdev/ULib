'use strict';

var Model = require('../../config/model');
var checkit  = require('checkit');
var Promise  = require('bluebird');
var bcrypt   = Promise.promisifyAll(require('bcrypt'));

var rules = {
	name: 'required',
	loan_time: 'numeric',
	description: 'maxLength:250'
};

var Groups = Model.extend({
	tableName: 'Categories',
	idAttribute: 'category_id',
	
	initialize: function() {
		this.on('saving', this.validateSave);
	},

	validateSave: function() {
		return checkit(rules).run(this.attributes);
	},

})

module.exports = Groups;