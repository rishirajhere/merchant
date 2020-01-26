import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// Vue.use(Vuex)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',

    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
 
  {
    path: '/mobile',
    name: 'mobile',
    component: () => import(/* webpackChunkName: "about" */ '../components/AddMobile.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/laptop',
    name: 'laptop',
    component: () => import(/* webpackChunkName: "about" */ '../components/AddLaptop.vue')
  },
  {
    path: '/books',
    name: 'books',
    component: () => import(/* webpackChunkName: "about" */ '../components/AddBooks.vue')
  },
  {
    path: '/shoes',
    name: 'shoes',
    component: () => import(/* webpackChunkName: "about" */ '../components/AddShoes.vue')
  },
  {
    path: '/apparel',
    name: 'apparel',
    component: () => import(/* webpackChunkName: "about" */ '../components/AddApparell.vue')
  },
  {
    path: '/watches',
    name: 'watches',
    component:()=> import(/* webpackChunkName: "about" */ '../components/AddWatches.vue')
  },{
    path: '/dash',
    name: 'dash',
    component:()=> import(/* webpackChunkName: "about" */ '../components/Dash.vue')
  },
  {
    path:'/updateProduct',
    name:'updateProduct',
    component:()=> import(/* webpackChunkName: "about" */ '../views/UpdateProduct.vue')
  },
  {
    path:'/NewMerchant',
    name:'NewMerchant',
    component:()=> import(/* webpackChunkName: "about" */ '../views/NewMerchant.vue')
  },
  {
    path:'/Merchant',
    name:'Merchant',
    component:()=> import(/* webpackChunkName: "about" */ '../views/MerchantProfile.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router