var express = require('express');
var router = express.Router();
var fs = require('fs');
var PATH = './public/data/';

//读取JSON数据
router.get('/read', function(req, res, next) {
  var type = req.param('type') || '';
  fs.readFile(PATH + type + '.json', (err, data) => {
    if (err) {
     return res.send({
       status:0,
       info: 'fail.....'
     });
    }
    var COUNT = 50;
    var obj = JSON.parse(data.toString());
    if(obj.length > COUNT){
      obj = obj.slice(0, COUNT);
    }
    return res.send({
      status:1,
      data: obj
    });
  });
});

//写入JSON数据
router.post('/write', function(req, res, next) {
  //文件名
  var type = req.param('type') || '';
  //关键字段
  var url = req.param('url') || '';
  var title = req.param('title') || '';
  var img = req.param('img') || '';

  if(!type || !url || !title || !img){
    return res.send({
      status: 0,
      info: '提交字段不全'
    });
  }

  fs.readFile(PATH + type + '.json', (err, data) => {
    //读取
    if (err) {
      return res.send({
        status: 0,
        info: 'fail.....'
      });
    }
    var arr = JSON.parse(data.toString());
    var obj = {
      img: img,
      url: url,
      title: title,
      id: guidGenerate(),
      time: new Date()
    };

    //写入
    arr.splice(0, 0, obj);
    var newData = JSON.stringify(arr);
    fs.writeFile(PATH + type + '.json', newData, (err, data) => {
      if(err){
        return res.send({
          status: 0,
          info: 'fail.....'
        });
      }
      return res.send({
        status: 1,
        info: obj
      });

    });
  });
});


//写入阅读JSON数据
router.post('/write_config', function(req, res, next) {
  var data = req.body.data;
  var obj = JSON.parse(data);
  //写入
  var newData = JSON.stringify(obj);
  fs.writeFile(PATH + 'config.json', newData, (err, data) => {
    if(err){
      return res.send({
        status: 0,
        info: 'fail.....'
      });
    }
    return res.send({
      status: 1,
      info: obj
    });

  });
});

//登录
router.post('/login', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;

  if(username === 'admin' && password === '123456'){
    req.session.user = {
      username: username,
      ok: '@#$%&^@@'
    };
    return res.send({
      status: 1
    });
  }else{
    return res.send({
      status: 0,
      info: '登录失败'
    });

  }
});


function guidGenerate() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  }).toUpperCase();
}

module.exports = router;
