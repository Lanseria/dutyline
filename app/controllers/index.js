var fs = require('fs');
var path = require('path');
var config = require('../../config.js');
var Member = require('../models/member');
var ArrageClass = require('../../lpsdk/arrageClass').ArrageClass;

exports.index = function(req, res){
  console.log(req.query.res);
  if(req.query.res=='1'){
    word = '谢谢';
  }else{
    word = '过来';
  }
  res.render('index', {
    isSubmit: false,
    word: word
  });
}

exports.details = function(req, res){
  var dept_id = req.query.dept_id;
  res.render('details', {
    dept_id: dept_id,
    dept: res.locals.web.depts[dept_id],
    isSubmit: true
  });
}
exports.savePoster = function(req, res){
  var posterData = req.files.uploadPoster;
  var filePath = posterData.path;
  var originalFilename = posterData.originalFilename;
	if (originalFilename) {
		fs.readFile(filePath, function(err, data){
			var timestamp = Date.now();
			var type = originalFilename.split('.')[1];
			var poster = timestamp+'.'+type;
			var newPath = path.join(__dirname, '../../', '/public/upload/' + poster);
			fs.writeFile(newPath, data, function(err){
				res.json({fname:poster, type:type});
			});
		})
	}
}

exports.postdetails = function(req, res){
  var data  = req.body.data;
  var member = new Member(data);
  console.log(member);
  var sourceFile = path.join(config.pathway.path, member.filename);
  var destPath = path.join(config.pathway[data.dept], member.name+'.'+member.type);
  fs.rename(sourceFile, destPath, function (err) {
    if (err) throw err;
    fs.stat(destPath, function (err, stats) {
      if (err) throw err;
      // console.log('stats: ' + JSON.stringify(stats));
      member.save(function(err, member){
        res.json('success');
      })
    });
  });
}

exports.demofiles = function(req, res){
  var fileName = req.params.fileName;
  var filePath = path.join(__dirname, '../../public/demo_xls/', fileName);
  console.log(filePath);
  var stats = fs.statSync(filePath);
  if (stats.isFile()) {
    res.set({
     'Content-Type': 'application/octet-stream',
     'Content-Disposition': 'attachment; filename='+fileName,
     'Content-Length': stats.size
    });
    fs.createReadStream(filePath).pipe(res);
  }
  else{
    res.end(404);
  }
}

exports.download = function(req, res){
  var client = new ArrageClass({
    'row': 6,
    'col': 5,
    'many': 100,
  })
  var suc = client.execute(function(err, suc){
    if (err) {console.log(err);}
    else{
      var fileName = 'output.xlsx';
      var filePath = path.join(suc);
      console.log(filePath);
      var stats = fs.statSync(filePath);
      if (stats.isFile()) {
        res.set({
         'Content-Type': 'application/octet-stream',
         'Content-Disposition': 'attachment; filename='+fileName,
         'Content-Length': stats.size
        });
        fs.createReadStream(filePath).pipe(res);
      }
      else{
        res.end(404);
      }
    }
  });
}
