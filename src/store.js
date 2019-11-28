import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
export default new Vuex.Store({
  strict: true,
  plugins: [],
  modules: {},
  state: {
    user: null,
    timer: 0
  },
  getters: {
    user: state => state.user,
    timer: state => state.timer
  },
  mutations: {
    setUser (state, val) {
      state.user = val
    },
    setTimer (state, val) {
      state.timer = val
    }
  },
  actions: {}
})
