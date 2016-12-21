'use strict';

// mongod.exe --dbpath C:\Users\Alexandru\mongo-data

// create a variable called mongo client based on the property retrieved with the same name
const {MongoClient, ObjectID} = require('mongodb');

// connect to mongo
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		// prevent rest of function executing
		return console.log('Unable to connect to MongoDB server');
	}

	// findOneAndUpdate
	db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID('585a6d6c9e25b093357e1361')
	}, {
		$set: {
			completed: true
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});
	
	console.log('Connected to MongoDB server');
	// close connection to MongoDB
	// db.close();
});