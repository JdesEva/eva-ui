import Vue from 'vue'
import App from './App.vue'
import evaUI from '../src'
import '../packages/theme/common.scss'

Vue.config.productionTip = false

Vue.use(evaUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
