import Vue from 'vue'
import Router from 'vue-router'
import Siz from "./components/siz.vue"
import Register from "./components/register.vue"
import Education from "./components/education.vue"
import Vocation from "./components/vocation.vue"
import Control from "./components/control.vue"
import Kvitok from "./components/kvitok.vue"
import Eda from "./components/eda.vue"
import Info from "./components/info.vue"
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      name: "Реклама+",
      path: "/",
      component: Info
    },
    {
      name: "Спецодежда+-",
      path: "/siz",
      component: Siz
    },
    {
      name: "Расчётный лист+",
      path: "/kvitok",
      component: Kvitok
    },
    {
      name: "Турникет",
      path: "/control",
      component: Control
    },
    {
      name: "Талоны+",
      path: "/eda",
      component: Eda
    },
    {
      name: "Отпуск+",
      path: "/vocation",
      component: Vocation
    },
    {
      name: "Обучение+",
      path: "/study",
      component: Education
    },
    {
      name: "ЭЛЕМ  Персонал+",
      path: "/mobile",
      component: Register
    },
  ]
})
export default router
