module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb+srv://root:rootpass@cluster0.00zbw.mongodb.net/react-jeopardy-app.users?retryWrites=true&w=majority',
    DATABASE_URL: process.env.DATABASE_URL || 'mongodb+srv://root:rootpass@cluster0.00zbw.mongodb.net/react-jeopardy-app.users?retryWrites=true&w=majority'
}

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://root:<password>@cluster0.00zbw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });