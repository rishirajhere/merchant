<template>

  <div id="app">




   <div v-if="isLogged">

    <Navbar/>
    <router-view/>
    

   </div>

   <div v-else>
      <h1>  Welcome to Merchant T9Cart</h1>

            <div class="fill">
   
                  <label >Email</label><input v-model="userEmail" type="email" required>
                  <br>
                  <label >Password</label><input type="password" v-model="userPassword">
                  <br>
                  <br>
                  <button @click="initiateLogin" >Submit</button>
                  <br>
                  <button class="xyz">Login with facebook</button>
                  <button class="xyz">Login with Email</button>
                  <br>
                  <router-link to="/newuser"> New user?</router-link>
                  <br>
                  <br>
            </div>






   </div>





  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name:'App',
  components:{
    Navbar
  },
   data: function () {
    return {
      // isLogged: false,
       userEmail:'',
       userPassword:'',
       isLogged:true

    }
  }
  ,
  methods:{
    initiateLogin(){
      const data = {
        userEmail: this.userEmail,
       userPassword: this.userPassword
      }
      this.$store.dispatch('loginUser',{
        data,
        success: this.onLoginSuccess,
        fail: this.onLoginFail
      })

    },
    onLoginSuccess () {
      this.isLogged=true
        this.$router.push({name: '/'})
    },
    onLoginFail () {
      this.isLogged= false
    //  this.$router.push({name: 'errorPage'})
    }
  }
}

</script>
<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background-color: orange; */
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.fill{
border: 4px solid black;
  width: 50%;
margin-left: 25%;
margin-top: 10%;
padding: 30px;
}




</style>
