import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from "./plugins/vuetify";
import helper from "./plugins/helper"
Vue.use(helper);
Vue.config.productionTip = false

window.app = new Vue({
  router,
  render: h => h(App),
  vuetify,
  store,
}).$mount('#app')
