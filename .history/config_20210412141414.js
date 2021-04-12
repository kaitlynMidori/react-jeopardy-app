module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb+srv://root:rootpass@cluster0.00zbw.mongodb.net/react-jeopardy-app.users?retryWrites=true&w=majority',
    DATABASE_URL: process.env.DATABASE_URL || 'mongodb+srv://root:rootpass@cluster0.00zbw.mongodb.net/react-jeopardy-app.users?retryWrites=true&w=majority'
}
