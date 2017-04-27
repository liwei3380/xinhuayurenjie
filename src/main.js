// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import init from './js/init.js'
import router from './js/router.js'
import jquery from 'jquery'
import wxshare from './js/wxshare.js'
import myconfig from './js/config.js'

Vue.use(init)

wxshare.init({
        signatureurl:'https://168i60480h.imwork.net:13707/Linki2uCenterTest/getsignature',
        appId:'wx3d5547d122fc289c',
        jsApiList:['onMenuShareTimeline','onMenuShareAppMessage','chooseImage','uploadImage'],
        callback:function(data){
          console.log('cb',data);
        },
      });

Vue.config.productionTip = false
/* eslint-disable no-new */

new Vue({
  el: '#app',
  template: '<App/>',
  router: router,
  components: { App }
})
