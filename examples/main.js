import Vue from 'vue'
import App from './App.vue'
import toast from "~/toast/index"
import demoComponent from '~/demo/index'

Vue.use(toast)
Vue.use(demoComponent)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')