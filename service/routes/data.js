var express = require('express');
var router = express.Router();
var fs = require('fs');
var PATH = './public/data/';

//读取数据模块，供客户端调用
//查询接口，token校验
//公共接口，无需校验
//data/read?type=it
//data/read?type=it.json
router.get('/read', function(req, res, next) {
  var type = req.param('type') || '';
  fs.readFile(PATH + type + '.json', function(err, data){
    if(err){
      return res.send({
        status:0,
        info:'读取文件出现异常'
      });
    }
    var COUNT = 50;
    //TODO: try
    var obj = [];
    try{
      obj = JSON.parse(data.toString());
    }catch(e){
      obj = [];
    }
    if(obj.length > COUNT){
      obj = obj.slice(0, COUNT);
    }
    return res.send({
      status:1,
      data:obj
    });
  });
});

//数据存储模块 后台开发使用
router.post('/write', function(req, res, next){
  if(!req.session.user){
    return res.send({
      status: 0,
      info: '未鉴权认证'
    });
  }
  //文件名
  var type = req.param('type') || '';
  //关键字段
  var url = req.param('url') || '';
  var title = req.param('title') || '';
  var img = req.param('img') || '';
  if(!type || !url || !title || !img){
    return res.send({
      status:0,
      info:'提交的字段不全'
    });
  }
  //1)读取文件
  var filePath = PATH + type + '.json';
  fs.readFile(filePath, function(err, data){
    if(err){
      return res.send({
        status:0,
        info: '读取数据失败'
      });
    }
    var arr = JSON.parse(data.toString());
    //代表每一条记录
    var obj = {
      img: img,
      url: url,
      title: title,
      id: guidGenerate(),
      time: new Date()
    };
    arr.splice(0, 0, obj);
    //2)写入文件
    var newData = JSON.stringify(arr);
    fs.writeFile(filePath, newData, function(err){
      if(err){
        return res.send({
          status:0,
          info: '写入文件失败'
        });
      }
      return res.send({
        status:1,
        info: obj
      });
    });
  });
});

//阅读模块写入接口 后台开发使用
router.post('/write_config', function(req, res, next){
  if(!req.session.user){
    return res.send({
      status: 0,
      info: '未鉴权认证'
    });
  }
  //TODO:后期进行提交数据的验证
  //防xss攻击 xss
  // npm install xss
  // require('xss')
  // var str = xss(name);
  var data = req.body.data;
  //TODO ： try catch
  var obj = JSON.parse(data);
  var newData = JSON.stringify(obj);
  //写入
  fs.writeFile(PATH + 'config.json', newData, function(err){
    if(err){
      return res.send({
        status: 0,
        info: '写入数据失败'
      });
    }
    return res.send({
      status: 1,
      info: obj
    });
  });
});

//登录接口
router.post('/login', function(req, res, next){
  //用户名、密码、验证码
  var username = req.body.username;
  var password = req.body.password;

  //TODO ：对用户名、密码进行校验
  //xss处理、判空

  //密码加密 md5(md5(password + '随机字符串'))
  //密码需要加密－> 可以写入JSON文件
  if(username === 'admin' && password === '123456'){
    req.session.user = {
      username: username
    };
    return res.send({
      status: 1
    });
  }

  return res.send({
    status: 0,
    info: '登录失败'
  });
});

//guid
function guidGenerate() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  }).toUpperCase();
}

module.exports = router;
