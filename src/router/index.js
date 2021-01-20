import Vue from 'vue'
import Router from 'vue-router'
import ShowCenter from '@/components/ShowCenter'

Vue.use(Router);

export default new Router({
  mode:'history',  // 别忘了改模式
  routes: [
    {
      path: '/',
      name: 'ShowCenter',
      component: ShowCenter
    }
  ]
})
