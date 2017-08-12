var fs = require('fs');
var path = require('path');
var Member = require('../models/member');
var ArrageClass = require('../../lpsdk/arrageClass').ArrageClass;

exports.index = function(req, res){
  res.render('index', {
    isSubmit: false
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
			var type = posterData.type.split('/')[1];
			var poster = originalFilename;
			var newPath = path.join(__dirname, '../../', '/public/upload/' + poster);
			fs.writeFile(newPath, data, function(err){
				res.json(poster);
			});
		})
	}
}

exports.postdetails = function(req, res){
  var data  = req.body.data;
  console.log(data);
  res.json('success');
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


exports.save = function(req, res){
  var xlsFileData = req.files.uploadXls;
  var filePath = xlsFileData.path;
  var name = req.body.uploadName;
  var number = req.body.uploadNumber;
  var originalFilename = xlsFileData.originalFilename;
  if (originalFilename) {
    fs.readFile(filePath, function(err, data){
      console.log(xlsFileData.type);
      // var type = xlsFileData.type.split('/')[1];
      var type = 'xls'
      var xlsFile = name + '.' + type;
      var newPath = path.join(__dirname, '../../', '/public/upload/' + xlsFile);
      fs.writeFile(newPath, data, function(err){
        var member = new Member();
        member.name = name;
        member.number = number;
        member.save(function(err, member){
          return res.redirect('/index');
        })
      })
    })
  }
  else{
    return res.redirect('/index');
  }
}