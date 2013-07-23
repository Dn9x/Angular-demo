
/*
 * GET users listing.
 */
var util = require('util');
var models = require('../model/db'),
    Tits = models.Tits, Users = models.Users, 
    Cells = models.Cells, Repls = models.Repls;

exports.home = function(req, res){
  	Tits.find(function (err, docs) { 
      //返回结果
      res.json({ tits: JSON.stringify(docs) })
    });
};

exports.post = function(req, res){
    Cells.find(function (err, docs) { 
      //返回结果
      res.json({ cells: JSON.stringify(docs) })
    });
};

exports.join = function(req, res){
    Repls.find(function (err, docs) { 
      //返回结果
      res.json({ repls: JSON.stringify(docs) })
    });
};
