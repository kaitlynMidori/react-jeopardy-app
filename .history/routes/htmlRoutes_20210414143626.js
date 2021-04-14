var express = require('express');
var router = express.Router();
var path =require('path');

//Gets homepage
router.get('/', function(req,res,next){
  res.render('index.ejs', {root: __dirname});
});


//gets react app
router.get('/app', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../client/public', 'index.html'));
 });


 
//  /* GET React App */
// router.get(['/app', '/app/*'], function(req, res, next) {
//  res.sendFile(path.join(__dirname, '../public', 'app.html'));
// });

module.exports = router;