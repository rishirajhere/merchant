<template>

    <div id="app">
        
        
     
      <!-- <span v-if="!this.$store.state.isLogged"> -->

            <Navbar/>
            <router-view/>
            <footer/>
      <!-- </span> -->


<!-- <span v-if="!this.$store.state.isLogged"> -->
         <!-- <button @click="redirect">Login</button> -->
         <!-- <Facebook></Facebook>
            <Google></Google>
         <button @click="redirect">NewMerchant</button> -->
     <!-- </span> -->

     
     



<!-- <div v-if="this.$store.state.isLogged"> -->
        <!-- </div> -->

        <!-- <div v-else> -->
              <!-- <h1>  Welcome to Merchant T9Cart</h1>

                    <div class="fill">
          
                          <label >Email</label><input v-model="userEmail" type="email" required>
                          <br>
                          <label >Password</label><input type="password" v-model="userPassword">
                          <br>
                          <br>
                          <button @click="initiateLogin" >Submit</button>
                          <br>
                           <button class="xyz">Login with facebook</button> -->
                          <!-- <Facebook></Facebook> -->
                          <!-- <Google/> -->
                          <!-- <button class="xyz">Login with Email</button> -->
                          <!-- <br>
                          <button onClick="redirect"> New user?</button>
                          <br>
                          <br> -->
                     <!-- </div> --> 
          <!-- </div> -->
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
//  import Facebook from '@/components/Facebook.vue'
//  import Google from '@/components/Google.vue'
export default {
  name:'App',
  components:{
    Navbar//,Facebook,Google
  },
   data: function () {
    return {
      // isLogged: false,
       userEmail:'',
       userPassword:'',
      //  isLogged:true

    }
  }
  ,
  methods:{
    
     redirect(){
          this.$router.push('/NewMerchant')
     },



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
      this.$store.state.isLogged=true
        this.$router.push({name: '/'})
    },
    onLoginFail () {
      window.console.log("Wrong credentials")
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