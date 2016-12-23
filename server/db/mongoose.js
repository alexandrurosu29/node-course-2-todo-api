'use strict';

let mongoose = require('mongoose');

// use built-in promises
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = {
	mongoose
}
