

const router = require('express').Router();
//require mongoose model
let Exercise = require('../models/exercise.model');

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

module.exports = router;