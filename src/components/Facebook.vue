<template>
  <main>
    <div>
<button @click="facebook_login" class="fb" >
  <img alt="Facebook" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_QdvVuaz1kxa6wKDXnQbb_jajx9ZzZ_o2WUwaHbu1bwnBjyyrgw&s">
    </button>
  
    </div>
  </main>
</template>
<script>
import firebase from 'firebase'
export default {
data:function(){
  return{
  }
},
methods:{
facebook_login()
{
    const vm=this;
const provider = new firebase.auth.FacebookAuthProvider();
firebase.auth().signInWithPopup(provider).then(function(result) {
  this.$store.dispatch('fbToken',{
    result,
    success: vm.onLoginSuccess,
    fail: vm.onLoginFail
    })
    }).
    catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    window.console.log(errorCode)
    window.console.log(errorMessage)
    window.console.log(email)
    window.console.log(credential)
    },
    )
},
onLoginSuccess(res) {
          if (res.loginStatus) {
            this.$router.push({ name: "home" });
          } else {
            window.console.log("You entered wrong credentials...");
          }
    },
    onLoginFail() {
      window.console.log("Something went wrong...")
      // this.$router.push({name: 'error'});
    }
}
}
</script>
<style scoped>
img{
  height: 20px;
}
button{
  width: 158px;
  padding-top: 2px;
}
</style>