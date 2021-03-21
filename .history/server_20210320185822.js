const
	dotenv = require('dotenv').load(),
	express = require('express'),
	app = express(),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	MONGODB_URI = process.env.MONGODB_URI || 'mongodb://local/react-jeopardy-app.users',
	PORT = process.env.PORT || 3001,
	usersRoutes = require('./routes/users.js')

mongoose.set('useCreateIndex', true)
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, (err) => {
	console.log(err || `Connected to MongoDB.`)
})

app.use(express.static(`${__dirname}/client/build`))
app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/api', (req, res) => {
	res.json({message: "API root."})
})

app.use('/api/users', usersRoutes)

app.use('*', (req, res) => {
	res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, (err) => {
	console.log(err || `Server running on port ${PORT}.`)
})

// const express = require('express');
// const cors = require ('cors');
// //connect to db
// const mongoose = require('mongoose');

// require('dotenv').config();

// //setup middleware
// const app = express();
// const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// //mongodb connection
// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true}
// 	);
// 	const connsection = mongoose.connection;
// 	mongoose.connection.once('open', () => {
// 		console.log("MongoDB database connection established successfully");
// 	})

// //require api files for routing
// const exercisesRouter = require('./routes/exercises');
// const usersRouter = require('./routes/users');

// app.use('/exercises', exercisesRouter);
// app.use('/users', usersRouter);

// app.listen(port, () => {
// 	console.log(`Server is running on port: ${port}`);
});