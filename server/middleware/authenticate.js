let {User} = require('./../models/user');

// middleware
let authenticate = (req, res, next) => {
	let token = req.header('x-auth');
	
	User.findByToken(token).then((user) => {
		if(!user) {
			res.status(401).send();
		}

		req.user = user;
		req.token = token;
		next();
	}).catch((e) => {
		res.status(401).send();
	});
};

module.exports = {
	authenticate
};