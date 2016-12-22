'use strict';

const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// let id = '585ba726d48bb458192eec52';

// if (!ObjectID.isValid(id)) {
// 	console.log('ID not valid');
// }

// // get all todos
// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos',todos);
// });


// // returns only one document (the first one the matches a query)
// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo',todo);
// });

// findById
// Todo.findById(id).then((todo) => {
// 	if(!todo) {
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo by id',todo);
// }).catch((e) => {
// 	console.log(e);
// })

let id = '585b93c3e35f6bc41836a8fa';

User.findById(id).then((user) => {
	if(!user) {
		return console.log('Id not found');
	}

	console.log('User by id',user);
}).catch((e) => {
	console.log(e);
})