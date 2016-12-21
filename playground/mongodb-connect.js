'use strict';

// mongod.exe --dbpath C:\Users\Alexandru\mongo-data
// const MongoClient = require('mongodb').MongoClient;

// create a variable called mongo client based on the property retrieved with the same name
const {MongoClient, ObjectID} = require('mongodb');

// creates an object id (just for reference)
// let obj = new ObjectID();
// console.log(obj);

// let user = {name: 'Alex', age: 27};
// // destructure the user object; get name property and set a new variable
// let {name} = user;
// console.log(name);

// connect to mongo
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		// prevent rest of function executing
		return console.log('Unable to connect to MongoDB server');
	}

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if(err) {
	// 		return console.log('Unable to insert todo', err);
	// 	}

	// 	// ops stores all documents stored
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	// db.collection('Users').insertOne({
	// 	name: 'Alex',
	// 	age: 27,
	// 	location: 'Constanta'
	// }, (err, result) => {
	// 	if(err) {
	// 		return console.log('Unable to insert users', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));

	// 	console.log(result.ops[0]._id.getTimestamp());
	// });

	console.log('Connected to MongoDB server');
	// close connection to MongoDB
	db.close();
});