var fs = require('fs');
var path = require('path');


const public = path.resolve(__dirname, 'public/upload');
var config = {
  pwd: "000000",
  web: {
    title: '排值班系统',
    org: '大学生科技创业中心',
    depts: [{
        n: 'IT',
        name: '技术部'
      },
      {
        n: 'UI',
        name: '动漫部'
      },
      {
        n: 'PJ',
        name: '项目部'
      },
      {
        n: 'DP',
        name: '行政部'
      },
      {
        n: 'NW',
        name: '网络部'
      },
    ]
  },
  pathway: {
    path: path.resolve(public),
  }
}
config.web.depts.forEach(function (el) {
  config.pathway[el.n] = path.join(path.resolve(public, el.name),'\\');
  fs.mkdir(config.pathway[el.n], function (err) {
    if (err) {
      if (err.code == 'EEXIST') {
        return;
      }
      console.error(err);
    } 
  })
}, this);

// console.log(config);

module.exports = config;