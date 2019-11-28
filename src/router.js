import Vue from 'vue'
import Router from 'vue-router'
import ShowHtml from "./components/showhtml.vue"
import Register from "./components/register.vue"
import Education from "./components/education.vue"
import Info from "./components/info.vue"
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      name: "Реклама",
      path: "/",
      component: Info
    },
    {
      name: "Спецодежда",
      path: "/siz",
      component: ShowHtml
    },
    {
      name: "Расчётный лист",
      path: "/kvitok",
      component: ShowHtml
    },
    {
      name: "Турникет",
      path: "/control",
      component: ShowHtml
    },
    {
      name: "Талоны",
      path: "/eda",
      component: ShowHtml
    },
    {
      name: "Отпуск",
      path: "/vocation",
      component: ShowHtml
    },
    {
      name: "Обучение",
      path: "/study",
      component: Education
    },
    {
      name: "ЭЛЕМ  Персонал",
      path: "/mobile",
      component: Register
    },
  ]
})
export default router
