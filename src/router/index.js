import Vue from 'vue'
import Router from 'vue-router'
import Menu from '../components/homePage'
import Index from '../components/index/Index'
import ExclusiveSrc from '../components/exclusiveSrc/list'
import Award from '../components/award/list'
import Understand from '../components/understand/list'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/homePage',
      name: 'homePage',
      component: Menu,
      redirect:'/homePage/index',
      children:[
        {
          path: 'index',
          name: 'index',
          component: Index
        },
        {
          path: 'src',
          name: 'exclusiveSrc',
          component: ExclusiveSrc
        },
        {
          path: 'award',
          name: 'award',
          component: Award
        },
        {
          path: 'understand/:id',
          name: 'understand',
          component: Understand
        }
      ]
    }
  ]
})
