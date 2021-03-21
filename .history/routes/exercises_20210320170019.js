const router = require('express').Router();
//require mongoose model
let Exercise = require('../models/exercise');

//route handles http path to return promise
router.route('/').get((req, res) => {
	Exercise.find()
	.then(exercises => res.json(exercises))
	.catch(err => res.status(400).json('Error: ' + err));
});

//handles incoming http post requests
router.route('/add').post((req, res) => {
	const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

	const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    });

	newExercise.save()
	.then(() => res.json('Exercise added!'))
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