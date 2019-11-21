import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './components/HelloWorld'
import info from "./components/info";
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      // children: [
      //   {
      //     path: 'tab5',
      //     name: 'monitor_tab5',
      //     component: tab5
      //   }
      // ]
    },
    {
      path: '/',
      name: 'info',
      component: info
    }
  ]
})
export default router
