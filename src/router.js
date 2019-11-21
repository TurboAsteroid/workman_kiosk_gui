import Vue from 'vue'
import Router from 'vue-router'
import index from './components/index'
import info from "./components/info";
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      // children: [
      //   {
      //     path: 'tab5',
      //     name: 'monitor_tab5',
      //     component: tab5
      //   }
      // ]
    },
    {
      path: '/info',
      name: 'info',
      component: info
    }
  ]
})
export default router
