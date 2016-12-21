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

	// db.collection('Todos').find({
	// 	_id: new ObjectID('5859b1c70d60911274db1a38')
	// }).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// });

	db.collection('Todos').find().count().then((count) => {
		console.log(`Todos count: ${count}`);
	}, (err) => {
		console.log('Unable to fetch todos', err);
	});

	console.log('Connected to MongoDB server');
	// close connection to MongoDB
	// db.close();
});