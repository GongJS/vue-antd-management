import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    userName: ''
  },
  mutations: {
    login (state, data) {
      state.isLogin = true
      state.userName = data
    },
    logout (state) {
      state.isLogin = false
      state.userName = ''
    },
    handleEnterRoute (state) {
      console.log(111, state.isLogin)
      return state.isLogin
    }
  },
  actions: {
  }
})
