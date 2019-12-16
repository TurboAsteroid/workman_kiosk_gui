import store from '../store'
import router from '../router'
let interval = undefined
let timer = () => {
  let timer = store.state.timer - 1
  store.commit('setTimer', timer)
  if (timer <= 0) {
    clearInterval(interval)
    store.commit('setUser', undefined)
    router.replace("/")
  }
}
const helper = {
  changeProximityCode: function (code) {
    clearInterval(interval)
    store.commit('setUser', code)
    if (code) {
      store.commit('setTimer', 10)
      interval = setInterval(() => timer(), 1000)
    } else {
      router.replace("/")
    }
  },
  setPrintable: function() {
    store.commit('setPrintable', window.jsobject.getprintenable())
  },
  print: function (code) {
    window.jsobject.PrintPage('https://apps.elem.ru:3037/kiosk/kvitokPrint?card='+code)
  },
  install: function (Vue) {
    Object.defineProperty(Vue.prototype, "helper", {
      get() {
        return helper
      },
    })
  },
}
export default helper
