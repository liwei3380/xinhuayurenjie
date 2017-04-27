// 引入vue
import Vue from 'vue'

// import wxshare from './wxshare.js'
// import config from './config.js'
// 开启调试模式
Vue.config.debug = true
var init = function () {
  var deviceWidth = document.documentElement.clientWidth // rem 单位
  if (deviceWidth > 750) deviceWidth = 750
  document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px'
  var deviceHeight = document.documentElement.clientHeight
  document.body.style.height = deviceHeight
  /* wxshare.init({
        signatureurl:config.hosturl+'/getsignature',
        appId:'wx3d5547d122fc289c',
        jsApiList:['onMenuShareTimeline','onMenuShareAppMessage'],
        title:'悦跑迎新 东兴送福',
        desc:'嘿，你的新春祝福到啦！请查收！戳这里，东兴证券带你迎新带你飞！',
        link:'http://www.linki2u.com/wxjstxt/dongxingrun/dao-fb.html',
        imgurl:'http://www.linki2u.com/wxjstxt/dongxingrun/share.jpg',
        callback:function(data){
          console.log('cb',data);
        },
      }); */
}

export default init
