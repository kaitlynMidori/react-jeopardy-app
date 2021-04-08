const
	dotenv = require('dotenv').load(),
	express = require('express'),
	app = express(),
	morgan = require('morgan');
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	MONGODB_URI = process.env.MONGODB_URI || 'mongodb://local/react-jeopardy-app.users',
	PORT = process.env.PORT || 8000,
	usersRoutes = require('./routes/users.js')
	cors = require('cors')
	
const {CLIENT_ORIGIN} = require('./config');
const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common';
app.use(morgan(morganSetting))

app.use(
    cors({
        origin: CLIENT_ORIGIN
    })
);

mongoose.set('useCreateIndex', true)
mongoose.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
	console.log(err || `Connected to MongoDB.`)
})

app.use(express.static(`${__dirname}/client/build`))
app.use(logger('dev'))
app.use(bodyParser.json())

// app.get('/api', (req, res) => {
// 	res.json({message: "API root."})
// })

app.get('/', (req, res) => {
	res.send(`Active endpoints: '/api/players-scores/'`)
  });

app.use('/api/users', usersRoutes)

app.use('*', (req, res) => {
	res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, (err) => {
	console.log(err || `Server running on port ${PORT}.`)
})

app.use(function errorHandler(error, req, res, next) {
	let response;
	if (NODE_ENV === 'production') {
	  response = { error: { message: 'server error' } };
	} else {
	  console.error(error);
	  response = { message: error.message, error };
	}
	res.status(500).json(response);
  });

