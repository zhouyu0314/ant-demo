import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Btn from '../views/btn/Btn'
import DropDown from '../views/dropDown/DropDown.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/btn',
      name: 'Btn',
      component: Btn
    },
    {
      path: '/dropDown',
      name: 'DropDown',
      component: DropDown
    }
  ]
})
