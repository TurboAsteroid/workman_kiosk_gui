import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
export default new Vuex.Store({
  strict: true,
  plugins: [],
  modules: {},
  state: {
    user: null
  },
  getters: {
    user: state => state.user
  },
  mutations: {
    setUser (state, val) {
      state.user = val
    }
  },
  actions: {}
})
