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
      name: "Реклама",
      path: "/",
      component: Info,
      show: 10
    },
    {
      name: "Спецодежда",
      path: "/siz",
      component: Siz,
      show: 1
    },
    {
      name: "Расчётный лист",
      path: "/kvitok",
      component: Kvitok,
      show: 0
    },
    {
      name: "Турникет",
      path: "/control",
      component: Control,
      show: 0
    },
    {
      name: "Талоны",
      path: "/eda",
      component: Eda,
      show: 1
    },
    {
      name: "Отпуск",
      path: "/vocation",
      component: Vocation,
      show: 0
    },
    {
      name: "Обучение",
      path: "/study",
      component: Education,
      show: 0
    },
    {
      name: "ЭЛЕМ  Персонал",
      path: "/mobile",
      component: Register,
      show: 1
    },
  ]
})
export default router
