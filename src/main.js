import Vue from 'vue'
import App from './App.vue'
import components from './components'

Vue.config.productionTip = false

// 注册全局组件
components.init()

window.vm = new Vue({
  render: h => h(App)
}).$mount('#app')
