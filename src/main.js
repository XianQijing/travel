// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'styles/reset.css' // 解决不同浏览器之间的差别
import 'styles/border.css'// 解决移动端1px物理像素
import fastClick from 'fastclick' // 解决移动端onclick事件延迟300毫秒触发
import 'styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import 'swiper/dist/css/swiper.css'
import store from './store'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.prototype.axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
