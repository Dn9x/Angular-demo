
/*
 * GET users listing.
 */
var util = require('util');
var models = require('../model/db'),
    Tits = models.Tits, Users = models.Users, 
    Cells = models.Cells, Repls = models.Repls;

exports.list = function(req, res){
  	Users.find(function (err, docs) { 

    	//判断是否有错
    	if(err){
    		users = [];
    	}

    	//返回结果
  		res.render('users', {
  			title: 'users',
  			users: docs	   //文章列表
  		});
    });
};

exports.lis = function(req, res){
    Users.find(function (err, docs) { 

      //判断是否有错
      if(err){
      console.log(err);
      }

      console.log(docs);

      console.log(JSON.stringify(docs));

      //返回结果
      res.json({ users: JSON.stringify(docs) })
    });
};

exports.tits = function(req, res){
    Tits.find(function (err, docs) { 

      //判断是否有错
      if(err){
        users = [];
      }

      //返回结果
      res.json({ tits: JSON.stringify(docs) })
    });
};


exports.test = function(req, res){
    
      res.render('test', {
        title: 'test',
      });
};


function check(docs){
  var data = '';

  docs.forEach(function(tit, index){
    data += '{"title":"' + tit.title + '", "href":"' + tit.href + '"},';
  });

  return data;
}