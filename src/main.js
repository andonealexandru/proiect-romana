import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import frameworks from './frameworks'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  frameworks,
  render: h => h(App)
}).$mount('#app')
