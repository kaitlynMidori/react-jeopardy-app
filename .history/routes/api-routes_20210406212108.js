// Requiring our models and passport as we've configured it
// var passport = require('../config/passport');
const passport = require('passport');
var db = require('../models/');

module.exports = function (app) {

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



