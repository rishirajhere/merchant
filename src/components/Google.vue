<template>
  <g-signin-button
    :params="googleSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    Sign in with Google
  </g-signin-button>
</template>
 <script>
import 'vue-google-signin-button';
export default {
  data () {
    return {
      googleSignInParams: {
        client_id: '260889580857-stnhev1qelkobgps71jh7dduebt75aod.apps.googleusercontent.com'
      }
    }
  },
  methods:{
    onSignInSuccess (googleUser)
    {
      // const data={acessToken:googleUser.uc.id_token}
      window.console.log(googleUser)
      // this.$store.dispatch('googleToken',{data})
    },
    onSignInError (error) {
      // `error` contains any error occurred.
      window.console.log('OH NOES', error)
    }
}
//}
}
 </script>
 <style>
.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
   padding: 4px 8px;
   border-radius: 3px;
   background-color: #3C82F7;
   color: #fff;
  box-shadow: 0 3px 0 #0F69FF;
 }
 </style>
