'use strict';

var Mongoose = require('mongoose');

var postSchema = Mongoose.Schema({
  title: {type: String, required: true},
	url: {type: String, required: true},
	votes: {type: Number, default: 1, required: true},
	userId: {type: Mongoose.Schema.ObjectId, ref: 'User', required: true},
  createdAt : {type: Date, required: true, default: Date.now},
	comments: [{
		body: {type: String, required: true},
		userId: {type: Mongoose.Schema.ObjectId, ref: 'User', required: true},
		votes: {type: Number, default: 1}
	}]
});

var User = Mongoose.model('User', userSchema);
module.exports = User;
