import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import store from './store'
import router from './router'

import services from './services/index' //发现用这样路径引入，IDE 可以很好地补全代码。用 '@/services/index.js'的方式就不行


Vue.config.productionTip = false

Vue.prototype.$services = services;     //创建 全局的 services 

Vue.prototype.$eventBus = new Vue();    //创建全局的事件总线
// console.log('Vue.prototype.$eventBus = ',Vue.prototype.$eventBus)



const app = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

Vue.prototype.$services.init(app)
