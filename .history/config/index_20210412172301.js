// config/index.js
const dbuser = 'root';
const dbpassword = 'rootpass';

const MONGODB_URI = `mongodb://${dbuser}:${dbpassword}@cluster0.00zbw.mongodb.net/react-jeopardy-app.users?retryWrites=true&w=majority`;

module.exports = MONGODB_URI;