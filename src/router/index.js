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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/merchant',
    name: 'merch',
    component: () => import(/* webpackChunkName: "about" */ '../views/MerchantHome.vue')
  },
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: () => import(/* webpackChunkName: "about" */ '../components/Home.vue')
  // },
  {
    path: '/mobile',
    name: 'mobile',
    component: () => import(/* webpackChunkName: "about" */ '../components/AddMobile.vue')
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
// export default router({
//   state: {
//     userDetails: {
//       status: false
//     },
//     productDetails: [
//         { name: 'iphone6s',description:'this is iphone', price:'12000',category: 'mobile',prod_rating:4.5, url1:'https://i.gadgets360cdn.com/products/large/1552901002_635_redmi_7.jpg' },
//         { name: 'samsung ', description:'this is samsung', price:'18000',category: 'mobile',prod_rating:4.3, url1:'https://i.gadgets360cdn.com/products/large/1552901002_635_redmi_7.jpg'},
//         { name: 'lenovo yoga', description:'this is lenovo', price:'15000',category: 'mobile',prod_rating:4.2 , url1:'https://i.gadgets360cdn.com/products/large/1552901002_635_redmi_7.jpg'}
//     ]
//   },
//   mutations: {
//     SET_PRODUCT_DETAILS(state, data) {
//       state.productDetails = {
//         ...data
//       }
//     }
//   },
//   actions: {
    
//     search(context, {data, success, fail}) {
//     // eslint-disable-next-line no-debugger
//       fetch('http://192.168.43.203:8080/merchantAndProduct/get/'+data, {
//         method: 'GET',
//         // body: data
//       })
//       .then(res => res.json())
//       .then(res => {
//         // commit changes related to user
//         window.console.log(res)
        
//         context.commit('SET_PRODUCT_DETAILS',res)
//         success && success(res)
//       })
//       .catch(err => {
//         window.console.log(err)
//         fail && fail()
//       })
//     }
//     // productCategory(context, {data, success, fail}) {
//     //     fetch('/api/search', {
//     //       method: 'POST',
//     //       body: data
//     //     })
//     //     .then(res => res.json())
//     //     .then(res => {
          
//     //       success && success(res)
//     //     })
//     //     .catch(err => {
//     //       window.console.log(err)
//     //       fail && fail()
//     //     })
//     //   }
//   },
//   getters: {
//     productList (state) {
//       return state.productDetails || []
//     },
//     getImageUrl(state){
//       return state.productDetails.url
//     }
//   },
//   modules: {
//   }
// })

