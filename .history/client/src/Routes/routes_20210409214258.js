// const express = require('express')
// const router = express.Router()
// const User = require('../database/models/user')
// const passport = require('../passport')


// router.post('/signup', (req, res) => {
//   console.log('req.body', req.body);

//   const { username, password } = req.body
//   // ADD VALIDATION
//   User.findOne({ username: username }, (err, user) => {
//       if (err) {
//           console.log('User.js post error: ', err)
//       } else if (user) {
//           res.json({
//               error: `Sorry, already a user with the username: ${username}`
//           })
//       }
//       else {
//           const newUser = new User({
//               username: username,
//               password: password
//           })
//           newUser.save((err, savedUser) => {
//               if (err) return res.json(err)
//               res.json(savedUser)
//           })
//       }
//   })
// })




// router.post(
//   '/user/login',
//   function (req, res, next) {
//       console.log(req.body);
//       next();
//   },
//   passport.authenticate('local'),
//   (req, res) => {
//       console.log('logged in', req.user);
//       var userInfo = {
//           username: req.user.username
//       };
//       res.send(userInfo);
//   }
// )


// // router.get('/', (req, res, next) => {
// //   console.log('===== user!!======')
// //   console.log(req.user)
// //   if (req.user) {
// //       res.json({ user: req.user })
// //   } else {
// //       res.json({ user: null })
// //   }
// // })

// router.post('/logout', (req, res) => {
//   if (req.user) {
//       req.logout()
//       res.send({ msg: 'logging out' })
//   } else {
//       res.send({ msg: 'no user to log out' })
//   }
// })

// module.exports = router

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
// Load User model
const User = require('/jeopardy-app/models/user.js');
const { forwardAuthenticated } = require('/jeopardy-app/config/middleware/isAuthenticated.js');

// Login Page
router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));

// Register Page
router.get('/register', forwardAuthenticated, (req, res) => res.render('register'));

// Register
router.post('/register', (req, res) => {
  const { name, email, password, password2 } = req.body;
  let errors = [];

  if (!name || !email || !password || !password2) {
    errors.push({ msg: 'Please enter all fields' });
  }

  if (password != password2) {
    errors.push({ msg: 'Passwords do not match' });
  }

  if (password.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' });
  }

  if (errors.length > 0) {
    res.render('register', {
      errors,
      name,
      email,
      password,
      password2
    });
  } else {
    User.findOne({ email: email }).then(user => {
      if (user) {
        errors.push({ msg: 'Email already exists' });
        res.render('register', {
          errors,
          name,
          email,
          password,
          password2
        });
      } else {
        const newUser = new User({
          name,
          email,
          password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                req.flash(
                  'success_msg',
                  'You are now registered and can log in'
                );
                res.redirect('/users/login');
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  }
});

// Login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
});

module.exports = router;
