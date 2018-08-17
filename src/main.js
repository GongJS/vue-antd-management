// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {message} from 'ant-design-vue'
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
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
