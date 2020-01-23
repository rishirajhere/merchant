<template>
<div class="login">
     <label >Email</label><input v-model="userEmail" type="email" >
      <br>
      <label >Password</label><input type="password" v-model="userPassword">
      <br>
   
    <br>
    <button @click="initiateLogin" >Submit</button>
    <br>
    <button>Login with facebook</button>
    <button>Login with Email</button>
    <br>
    <router-link to="/newuser"> New user?</router-link>
    <br>
    <br>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>