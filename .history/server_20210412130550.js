const
	dotenv = require('dotenv').load(),
	express = require('express'),
	app = express(),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	MONGODB_URI = process.env.MONGODB_URI || 'mongodb://local/react-jeopardy-app.users',
	PORT = process.env.PORT || 8000,
	usersRoutes = require('./routes/users.js')
	cors = require('cors')

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://root:rootpass@cluster0.00zbw.mongodb.net/react-jeopardy-app.users?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
	const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
	
const {CLIENT_ORIGIN} = require('./config');

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
app.use(express.json())

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
