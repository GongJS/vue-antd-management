// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {message} from 'ant-design-vue'
import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$http = axios

router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('demo-token')
  if (token !== 'null' && token != null) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token // 全局设定header的token验证,Bearer后面需要添加个空格
  }
  if (to.meta.requiresAuth) {
    if (store.state.isLogin === true) {
      next()
    } else {
      message.warning('请先登录')
      next(false)
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
