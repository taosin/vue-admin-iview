import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'

Vue.config.productionTip = false

Vue.use(iView)

const admin = new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})

window.admin = admin
