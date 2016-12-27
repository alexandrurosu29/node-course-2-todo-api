'use strict';

const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
});

// instance method
UserSchema.methods.toJSON = function () {
  var user = this;
  var userObject = user.toObject();

  return _.pick(userObject, ['_id', 'email']);
};

// instance method
UserSchema.methods.generateAuthToken = function () {
  var user = this;
  var access = 'auth';
  var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

  user.tokens.push({access, token});

  // return a promise
  return user.save().then(() => {
    return token;
  });
};

// middleware for mongoose
UserSchema.pre('save', function(next) {
	let user = this;

	// prevent double hash if we do not update the password
	if(user.isModified('password')) {
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(user.password, salt, (err, hash) => {
				user.password = hash;
				next();
			});
		})
	} else {
		next();
	}
});

UserSchema.methods.removeToken = function(token) {
  let user = this;

  return user.update({
    // removes data from an array if it matches
    $pull: {
      tokens: {
        token: token
      }
    }
  })
};


// model method
UserSchema.statics.findByToken = function(token) {
	// model as the 'this' obj
	let User = this;
	let decoded = undefined;

	try{
		decoded = jwt.verify(token, 'abc123');
	}catch(e) {
		// return new Promise((resolve,reject) => {
		// 	reject();
		// })
		return Promise.reject();
	}

	// return a promise
	return User.findOne({
		'_id': decoded._id,
		'tokens.token': token,
		'tokens.access': 'auth'
	});
}

UserSchema.statics.findByCredentials = function(email, password) {
  let User = this;

  return User.findOne({email}).then((user) => {
    if(!user) {
      return Promise.reject();
    }

    return new Promise((resolve, reject) => {
      bcrypt.compare(password, user.password, (err, res) => {
        if(res) {
          resolve(user);
        } else {
          reject(user);
        }
      });
    })
  });
};

var User = mongoose.model('User', UserSchema);

module.exports = {User}
