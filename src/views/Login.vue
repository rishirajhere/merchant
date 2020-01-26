<template>
  <main class="login">
    <div class="container">
      <div class="imgcontainer">
        <img
          src="data:image/png;base64,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"
             alt="Avatar"
          class="avatar"
        />
        <h1>Login</h1>
      </div>
      <label>Email</label>
      <input v-model="userEmail" type="email" />
      <br />
      <label>Password</label>
      <input type="password" v-model="userPassword" />
      <br />
      <br />
      <button @click="initiateLogin">Submit</button>
      <br />
      <!-- <Facebook></Facebook> -->
      <Google></Google><br>
      <br>
      <Facebook class="fb"></Facebook>
      <br />
      <router-link to="/NewMerchant">New Merchant?</router-link>
      <br />
      <br />
    </div>
    <div>
    </div>
  </main>
</template>
<script>
// import Facebook from '@/components/Facebook'
import Google from '@/components/Google'
import Facebook from '@/components/Facebook'
export default {
  components:{
    Google,Facebook
},
  data: function() {
    return {
      userEmail: "",
      userPassword: "",
    }
  },
  methods: {
    initiateLogin() {
      const data = {
        userEmail: this.userEmail,
        userPassword: this.userPassword
      }
      this.$store.dispatch("loginUser", {
        data,
        success: this.onLoginSuccess,
        fail: this.onLoginFail
      })
    },
    onLoginSuccess(res) {
          if (res.loginStatus) {
            this.$router.push({ name: "home" });
            localStorage.setItem("payload", JSON.stringify(res));
          } else {
            window.console.log("You entered wrong credentials...");
          }
    },
    onLoginFail() {
      window.console.log("Something went wrong...")
      this.$router.push({name: 'error'});
    }
  }
}
</script>
<style  scoped>
.container {
  border: 4px solid black;
  width: 50%;
  margin-left: 25%;
  margin-top: 10%;
  height: 600px;
}
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}
img.avatar {
  width: 20%;
  border-radius: 50%;
}
.fb{
width: 100%;
}
</style>