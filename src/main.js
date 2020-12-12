import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.css"
import axios from 'axios'

//Setting a base axios request
const base = axios.create({
  baseURL: "http://localhost:3000"
})

// definir una propiedad http que estará disponible en todas las instancias de Vue
Vue.prototype.$http = base

// Set this to false to prevent the production tip on Vue startup.
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
