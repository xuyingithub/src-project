import Vue from 'vue'
import Router from 'vue-router'
import homePage from '../components/homePage'
import Index from '../components/index/Index'
import ExclusiveSrc from '../components/exclusiveSrc/list'
import Award from '../components/award/list'
import Understand from '../components/understand/list'
import srcDetails from '../components/exclusiveSrc/details'
import Submit from '../components/exclusiveSrc/submit'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/homePage',
      name: 'homePage',
      component: homePage,
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
          component: ExclusiveSrc,
        },
        {
          path: 'details',
          name: 'srcDetails',
          component: srcDetails
        },
        {
          path: 'submit',
          name: 'submit',
          component: Submit
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
