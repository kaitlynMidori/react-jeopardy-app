// const
// 	express = require('express'),
// 	usersRouter = new express.Router(),
// 	usersCtrl = require('../controllers/users.js'),
// 	verifyToken = require('../serverAuth.js').verifyToken

// usersRouter.route('/')
// 	.get(usersCtrl.index)
// 	.post(usersCtrl.create)

// usersRouter.post('/authenticate', usersCtrl.authenticate)


// usersRouter.use(verifyToken)
// usersRouter.route('/:id')
// 	.get(usersCtrl.show)
// 	.patch(usersCtrl.update)
// 	.delete(usersCtrl.destroy)

// module.exports = usersRouter

const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
	User.find()
	.then(users => res.json(users))
	.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	const username = req.body.username;

	const newUser = new User({username});

	newUser.save()
	.then(() => res.json('User added?'))
	.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;