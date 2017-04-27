import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/index', component: require('../components/Home')
  }, {
    path: '/toutiao/:id', component: require('../components/Toutiao')
  }, {
    path: '/inputuserinfo/:imgsrc', component: require('../components/Inputuserinfo')
  }, {
    path: '/mtime', component: require('../components/Time')
  }, {
    path: '/redbag', component: require('../components/Redbag')
  }, {
    path: '*', redirect: '/index'
  }]
})

export default router
