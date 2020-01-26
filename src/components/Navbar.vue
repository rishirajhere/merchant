<template>
 <!-- <span v-if="this.$store.state.isLogged"> -->
     <nav class="navbar" >
            <button @click="login">Login</button> |
            <button @click="getDash">Dashboard</button>   | 
            <button @click="getAllMobiles">Add Mobile</button>     | 
            <button @click="getAllLaptops">Add Laptop</button>     | 
            <button @click="getAllWatches">Add Watches</button>     | 
            <button @click="getAllShoes">Add Shoes</button>     | 
            <button @click="getAllApparels">Add Apparel</button> | 
            <button @click="getAllBooks">Add Books</button>  |
            <button @click="logout">Logout</button>  

    </nav>
<!-- </span> -->
   



</template>
<script>

export default {
   methods:{
        logout(){
            // this.$store.dispatch('logout'),{
            //     success: this.onLoginSuccess,
            //     fail: this.onLoginFail

            localStorage.removeItem("payload")
            
             this.$router.push("/")
            // v-if()


            
        },
        onLoginSuccess () {
            this.router.push({name: '/'})
            
        },

        login(){
             this.$router.push("/login")
        },

        onLoginFail () {
            window.console.log("Not Logged out Sorry ;)")
        },
        getAllBooks(){
            

            this.$router.push("/books")
        },
        getAllApparels(){

            this.$router.push("/apparel")
        },
        getAllShoes(){
            this.$router.push("/shoes")
        },
        getAllWatches(){
            this.$router.push("/watches")
        },
        getAllLaptops(){

            this.$router.push("/laptop")
        },
        getAllMobiles(){
            this.$router.push("/mobile")
        },
        getDash(){
            this.$router.push("/dash")
        }


}



}
</script>
<style scoped>
.navbar {
    border: 1px solid #F7937D;
    background: orange;
    height: 8vh;
    
}

.search{
  padding: 10px;
  margin:10px;
  width: 500px;
  border-radius: 3px solid orange;
  background: white;
  color: orange;
}
.search-btn{
    border-radius: 5px solid orange;
    color: orange;
    cursor: pointer;
    padding: 8px;
    margin-left: 5px;
    font-size: 12px;
    font-weight: 800;
    background: #fff;
}
.search-btn:hover{
    background: orange;
    color: white;
}
.navbar-item
{
    align-items: left; 
    text-decoration: none;
}
.navbar-item-right{
    margin-left:240px;
    text-decoration: none;
}
.cart{
    margin-left: 60px;
    text-decoration: none;
    color: black;
}
.login{
    text-decoration: none;
    color: black;
}
.login:visited,.cart:visited{
    color: black;
}
a:visited{
    text-decoration: none;
    color: black;
    font-size: 14px;
}
a:hover{
    color:white;
}
</style>