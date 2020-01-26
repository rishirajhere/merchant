<template>
  <main>
    <div class="imgcontainer">
    <img src="https://atendesigngroup.com/sites/default/files/styles/very_large/public/address-field.png?itok=XSv0R_Ua(132 kB)
https://atendesigngroup.com/sites/default/files/styles/very_large/public/address-field.png?itok=XSv0R_Ua
" alt="Avatar" class="avatar">
  </div>
      <label>Email</label><input type="email" v-model="userEmail">
      <br>
      Name<input type="text" v-model="userName">
      <br>
      Password<input type="password" v-model="userPassword">
      <br>
      ConfirmPassword<input type="password">
      <br>
      Address<input type="text" v-model="userAddress">
      <br>
      <label>Enter image Url</label>
      <input type="text" v-model="userImgUrl">
<br>
<!-- <div v-if='!image'>
  <h3>Select an image</h3>
    <input type="file" name="" @change="onFileChange">
</div>
    <div v-else>
<img:src="image"/>
<button @click="removeImage($event)">Remove</button>
    </div> -->
<button type="submit" @click="Profile">Create Account</button>
  </main>
</template>
<script>
export default {
data:function()
{
 return {
   userEmail:'',
   userName:'',
   userAddress:'',
   userImgUrl:'',
   userPassword:''
 }
},
methods: {
  Profile() {
            const data = {
                "userEmail": this.userEmail,
                "userName": this.userName,
                "userAddress": this.userAddress,
                "userImgUrl": this.userImgUrl,
                "userPassword": this.userPassword
            }
            this.$store.dispatch('merchant_profile', {
                data,
                success: this.onAddSuccess,
                fail: this.onAddFail
            })
        },
        onAddSuccess (res) {
            if(res.status == true)
            this.$router.push({name: 'home'})
            else
            this.$router.push({name: 'error'})
        },
        onAddFail () {
            this.$router.push({name: 'error'});
        }
}
        
}
</script>
<style scoped>
input[type=email], input[type=password],input[type=text]{
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
</style>