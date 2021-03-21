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
const Exercise = require('../models/exercise');
//require mongoose model
let User = require('../models/user');

//route handles http path to return promise
router.route('/').get((req, res) => {
	User.find()
	.then(users => res.json(users))
	.catch(err => res.status(400).json('Error: ' + err));
});

//handles incoming http post requests
router.route('/add').post((req, res) => {
	const username = req.body.username;

	const newUser = new User({username});

//save new user
	newUser.save()
	.then(() => res.json('User added!'))
	.catch(err => res.status(400).json('Error: ' + err));
});

//Get request with object id
router.route('/:id').get((req,res) => {
	//pass in param id from url and find id
	Exercise.findById(req.params.id)
	//return json
	.then(exercise => res.json(exercise))
	//or return error
	.catch(err => res.status(400).json('Error: ' + err));
});

//Delete request pass in object id
router.route('/:id').delete((req,res) => {
	//pass in param, find and delete
	Exercise.findByIdAndDelete(req.params.id)
	.then(()=> res.json('Exercise deleted.'))
	.catch(err => res.status(400).json('Error: ' + err));
});

//Post update
router.route('/update/:id').post((req,res) => {
	//Find id and pass in param
	Exercise.findById(req.params.id)
	.then(exercise => {
		//set username json object
		exercise.username = req.body.username;
		//set description json object
		exercise.description = req.body.description;
		//set duration json object
		exercise.duration = Number(req.body.duration);
		exercise.date = Date.parse(req.body.date);

		exercise.save()
		.then(() => res.json('Exercise updated!'))
		.catch(err => res.status(400).json('Error: ' + err));
	})
	.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;