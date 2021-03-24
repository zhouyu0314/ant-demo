import Vue from 'vue'
import App from './App'
import router from './router'
import "ant-design-vue/dist/antd.css"
import antDesignVue from 'ant-design-vue'

Vue.use(antDesignVue)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
