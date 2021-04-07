// Requiring our models and passport as we've configured it
// var passport = require('../config/passport');
const passport = require('passport');
var db = require('../models/');

module.exports = function (app) {

  //POST ROUTES//

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error

  //Login in User//
  app.post('/api/loginuser', passport.authenticate('local'), function (req, res) {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  //kaylie
  app.post('/login', passport.authenticate('local'), function (req, res) {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      username: req.user.username,
      id: req.user.id
    });
  });

  //kaylie test WORKING
  app.post('/signup', function (req, res) {
    db.User.create({
      username: req.body.username,
      password: req.body.password,
    })
    .then(function (user) {
      console.log(user)
      req.login(user, function (err) {
        if (err) {
          return next(err)
        }
        user.password = undefined;
        res.json(user);
      });

    })
    .catch(function (err) {
      console.log(err)
      res.status(401).json(err);
    });
  });

//Sign up user//
  app.post('/api/signupuser', function (req, res) {
    db.User.create({
      userName: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })
      .then(function (user) {
        console.log(user)
        req.login(user, function (err) {
          if (err) {
            return next(err)
          }
          user.password = undefined;
          res.json(user);
        });

      })
      .catch(function (err) {
        console.log(err)
        res.status(401).json(err);
      });
  });

  


  //kaylie
   // GET route for getting all of the scores
   app.get("/api/players-scores/", function(req, res) {
    console.log("---- HIT api/playerScores -----")
    db.Score.findAll({ limit: 10, order: [ ["score",  "DESC"] ]}).then(function(dbPost) {
        res.json(dbPost);
      });
  });


  // POST route for saving a new score
  app.post("/api/players-scores/", function(req, res) {
    db.Score.create({
        name: req.body.name,
        score: req.body.score
    }).then(function(dbPost) {
        res.json(dbPost);
    });
  });
};



