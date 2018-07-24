import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

const admin = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

window.admin = admin
