import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
export default new Vuex.Store({
  strict: true,
  plugins: [],
  modules: {},
  state: {
    user: null,
    access: 0,
    timer: 0,
    printable: 0
  },
  getters: {
    user: state => state.user,
    printable: state => state.printable,
    timer: state => state.timer,
    access: state => state.access,
  },
  mutations: {
    setUser (state, val) {
      state.user = val
    },
    setAccess (state, val) {
      state.access = val
    },
    setTimer (state, val) {
      state.timer = val
    },
    setPrintable (state, val) {
      state.printable = val
    }
  },
  actions: {}
})
