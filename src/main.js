import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "firebase"
import GSignInButton from 'vue-google-signin-button'
Vue.use(GSignInButton)
var firebaseConfig = {
  apiKey: "AIzaSyCQ6m0otQF6KOrNqzsSRR_emiPEFo5l3E4",
  authDomain: "team9ecommerce-86e70.firebaseapp.com",
  databaseURL: "https://team9ecommerce-86e70.firebaseio.com",
  projectId: "team9ecommerce-86e70",
  storageBucket: "team9ecommerce-86e70.appspot.com",
  messagingSenderId: "757689317860",
  appId: "1:757689317860:web:2b8842e5d46431f542eff1",
  measurementId: "G-8H9BYBZ9WY"
};
firebase.initializeApp(firebaseConfig);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

