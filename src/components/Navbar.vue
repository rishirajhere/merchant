<template>
    <nav class="navbar">
            <router-link  to="/dash" >Dashboard</router-link>     | 
            <router-link to="/mobile">Add Mobile</router-link>     | 
            <router-link to="/laptop">Add Laptop</router-link>     | 
            <router-link to="/watches">Add Watches</router-link>     | 
            <router-link to="/shoes">Add Shoes</router-link>     | 
            <router-link to="/apparel">Add Apparel</router-link> | 
            <router-link to="/books">Add Books</router-link>  |
            <button @click='getout'>Logout</button>

  </nav>
</template>
<script>
export default {
    methods:{
        getout(){
            window.console.log("jaaa yaha se")
            this.$store.isLogged=false
            this.$router.push('/')
    }
    }
    
}
</script>
<style scoped>
.navbar {
    border: 1px solid orange;
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
/* .search-btn{
    padding: 5px;
    border-radius: 3px solid orange;
    background: white;
} */
a:visited{
    text-decoration: none;
    color: black;
    font-size: 14px;
}
a:hover{
    color:white;
}
</style>