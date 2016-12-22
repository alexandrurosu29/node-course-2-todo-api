'use strict';

const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// // do not get docs back
// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

// // we return the doc
Todo.findOneAndRemove({_id: '585bdb56e3f59ee44e8a30de'}).then((result) => {

});

// we return the doc
Todo.findByIdAndRemove('585bdb56e3f59ee44e8a30de').then((todo) => {
	console.log(todo)
});