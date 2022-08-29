import Vue from 'vue'
import VueRouter from 'vue-router'
import Shop from '../views/Shop.vue'
import Comlist from '../views/ComList.vue'
import listAll from '../views/listAll.vue'
import listStyle from '../views/listStyle.vue'
import listSell from '../views/listSell.vue'
import listRate from '../views/listRate.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:"/Shop",
    component:Shop
},
{
    path:"/Comlist",
    component:Comlist
},{
    path:"/",
    component:Shop,
    redirect: '/listAll',
    children: [
      {
        path: '/listAll',
        name: 'listAll',
        component: listAll
      },
      {
        path: '/listStyle',
        name: 'listStyle',
        component: listStyle
      }
      ,
      {
        path: '/listSell',
        name: 'listSell',
        component: listSell
      },
      {
        path: '/listRate',
        name: 'listRate',
        component: listRate
      }
      
    ]
}
]

const router = new VueRouter({
  routes
})

export default router
