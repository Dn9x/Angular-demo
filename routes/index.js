
/*
 * GET home page.
 */
var util = require('util');
var models = require('../model/db'),
    Tits = models.Tits, Users = models.Users, 
    Cells = models.Cells, Repls = models.Repls;

exports.index = function(req, res) {
  Users.find(function(err, docs){
  	res.render('index', { users: docs });
  });

};

exports.partials = function(req, res) {
  var filename = req.params.filename;
  if(!filename) return; // might want to change this
  res.render("partials/" + filename);
};
