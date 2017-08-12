var Index = require('./app/controllers/index');
var multipart = require('connect-multiparty');
var fs = require('fs');
var trim = require('trim');
var path = require('path');
var _ = require('lodash');

var multipartMiddleware = multipart();


module.exports = function(app){
  //pre handle user
  app.use(function(req, res, next){
    res.locals.web = app.locals.web;
    // var deviceAgent = req.headers["user-agent"].toLowerCase();
    // var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
    // if(agentID){
    //   return res.send('仅支持PC端');
    // }else{
    //   next();
    // }
    next();
  })

  // index page
  app.get('/', Index.index);
  app.get('/index', Index.index);

  app.get('/details', Index.details);
  app.post('/details', Index.postdetails);
  app.post('/uploadPost', multipartMiddleware, Index.savePoster);

  app.post('/uploadXls', multipartMiddleware, Index.save);

  app.get('/demofiles/:fileName', Index.demofiles);

  app.get('/download', Index.download);
}