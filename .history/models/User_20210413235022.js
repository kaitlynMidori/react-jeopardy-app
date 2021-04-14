// const
// 	mongoose = require('mongoose'),
// 	bcrypt = require('bcrypt-nodejs'),
// 	userSchema = new mongoose.Schema({
// 		name: { type: String },
// 		email: { type: String, required: true, unique: true },
// 		password: { type: String, required: true }
// 	})

// // adds a method to a user document object to create a hashed password
// userSchema.methods.generateHash = function(password) {
// 	return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
// }

// // adds a method to a user document object to check if provided password is correct
// userSchema.methods.validPassword = function(password) {
// 	return bcrypt.compareSync(password, this.password)
// }

// // middleware: before saving, check if password was changed,
// // and if so, encrypt new password before saving:
// userSchema.pre('save', function(next) {
// 	if(this.isModified('password')) {
// 		this.password = this.generateHash(this.password)
// 	}
// 	next()
// })

// const User = mongoose.model('User', userSchema)
// module.exports = User

// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require('bcryptjs');
// Creating our User model
module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    // The email cannot be null, and must be a proper email before creation
    // email: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   unique: true,
    //   validate: {
    //     isEmail: true
    //   }
    // },
    // The password cannot be null
    username: {
      type: DataTypes.STRING,
      // allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      // allowNull: false
    }
    
  });

  
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook('beforeCreate', function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
};