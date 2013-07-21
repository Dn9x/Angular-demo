var path = require('path');

module.exports = function(app){
  app.get('/',function(req,res){
    var html = path.normalize(__dirname + '/../views/index.html');
    res.sendfile(html);
  });

};
