import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import './styles/index.less'

Vue.use(VueRouter)

const routers=[]

const router=new VueRouter({
  routers
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
