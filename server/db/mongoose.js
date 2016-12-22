'use strict';

let mongoose = require('mongoose');

// use built-in promises
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
	mongoose
}
