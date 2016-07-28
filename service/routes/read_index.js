var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var obj = {
    status: 1,
    /*推荐专题2个*/
    recommendTopic: [
      {
        img: 'http://7xtp9h.com1.z0.glb.clouddn.com/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202016-05-04%20%E4%B8%8B%E5%8D%889.19.03.png',
        url: 'http://mp.weixin.qq.com/s?__biz=MzI1OTE1MzU4NA==&mid=404852295&idx=1&sn=3223f39159d2d52917ff1a6dc50ee9c7#rd',
        title:'每一个孩子都是一棵小树'
      },
      {
        img: 'http://img04.meituncdn.com/group1/M00/C0/BA/wKgyOlcLlPuAc67MAAA_RkDApWQ109_340.jpg',
        url: 'http://mp.weixin.qq.com/s?__biz=MzI1OTE1MzU4NA==&mid=404852295&idx=1&sn=3223f39159d2d52917ff1a6dc50ee9c7#rd',
        title:'冬天没眼泪'
      }
    ],
    /*热门主题8个*/
    hotTopic: [
      {
        img: 'http://img02.meituncdn.com/group1/M00/0D/00/wKgyOlWTojeAXM__AAJDPmelESg919_200.jpg',
        title: '励志故事',
        url: ''
      },
      {
        img: 'http://img02.meituncdn.com/group1/M00/0D/00/wKgyOlWTojeAXM__AAJDPmelESg919_200.jpg',
        title: '你不知道的事',
        url: ''
      },
      {
        img: 'http://img02.meituncdn.com/group1/M00/0D/00/wKgyOlWTojeAXM__AAJDPmelESg919_200.jpg',
        title: '这一切都只能这样',
        url: ''
      },
      {
        img: 'http://img02.meituncdn.com/group1/M00/0D/00/wKgyOlWTojeAXM__AAJDPmelESg919_200.jpg',
        title: '回到过去,不曾失意',
        url: ''
      },
      {
        img: 'http://img02.meituncdn.com/group1/M00/0D/00/wKgyOlWTojeAXM__AAJDPmelESg919_200.jpg',
        title: '小门徒的悲惨人生',
        url: ''
      },
      {
        img: 'http://img02.meituncdn.com/group1/M00/0D/00/wKgyOlWTojeAXM__AAJDPmelESg919_200.jpg',
        title: '太阳花的落落',
        url: ''
      },
      {
        img: 'http://img02.meituncdn.com/group1/M00/0D/00/wKgyOlWTojeAXM__AAJDPmelESg919_200.jpg',
        title: '鸡公祝你快快乐乐,Happy Every Day,绿茶统一',
        url: ''
      },
      {
        img: 'http://img02.meituncdn.com/group1/M00/0D/00/wKgyOlWTojeAXM__AAJDPmelESg919_200.jpg',
        title: '太阳下山咯',
        url: ''
      }
    ],
    /*分类*/
    category:[
      {
        url: 'http://img02.meituncdn.com/group1/M00/C0/BA/wKgyOlcLlT6AdHGgAABNeWvn2lk700_340.jpg',
        img: '',
        text: '互联网'
      },
      {
        url: 'http://img02.meituncdn.com/group1/M00/C0/BA/wKgyOlcLlT6AdHGgAABNeWvn2lk700_340.jpg',
        img: '',
        text: '笑话'
      },
      {
        url: 'http://img02.meituncdn.com/group1/M00/C0/BA/wKgyOlcLlT6AdHGgAABNeWvn2lk700_340.jpg',
        img: '',
        text: '投资'
      },
      {
        url: 'http://img02.meituncdn.com/group1/M00/C0/BA/wKgyOlcLlT6AdHGgAABNeWvn2lk700_340.jpg',
        img: '',
        text: '管理'
      }
    ],
    /*其他推荐*/
    other:[
      {
        img: 'http://img03.meituncdn.com/group1/M00/3B/64/wKgyOlY50zuAXmUuAAETAHil5mo829_375.jpg',
        title: '话不缺',
        url: ''
      },
      {
        img: 'http://img03.meituncdn.com/group1/M00/3B/64/wKgyOlY50zuAXmUuAAETAHil5mo829_375.jpg',
        title: '耐狗头',
        url: ''
      },
      {
        img: 'http://img03.meituncdn.com/group1/M00/3B/64/wKgyOlY50zuAXmUuAAETAHil5mo829_375.jpg',
        title: '吃饭不给钱',
        url: ''
      },
      {
        img: 'http://img03.meituncdn.com/group1/M00/3B/64/wKgyOlY50zuAXmUuAAETAHil5mo829_375.jpg',
        title: '上炕',
        url: ''
      },
      {
        img: 'http://img03.meituncdn.com/group1/M00/3B/64/wKgyOlY50zuAXmUuAAETAHil5mo829_375.jpg',
        title: '看看你多勇敢',
        url: ''
      },
      {
        img: 'http://img03.meituncdn.com/group1/M00/3B/64/wKgyOlY50zuAXmUuAAETAHil5mo829_375.jpg',
        title: '生命可贵',
        url: ''
      },
      {
        img: 'http://img03.meituncdn.com/group1/M00/3B/64/wKgyOlY50zuAXmUuAAETAHil5mo829_375.jpg',
        title: '太阳的故事',
        url: ''
      },
      {
        img: 'http://img03.meituncdn.com/group1/M00/3B/64/wKgyOlY50zuAXmUuAAETAHil5mo829_375.jpg',
        title: '央视电影频道',
        url: ''
      }
    ]
  };
  res.json(obj);
});

module.exports = router;
