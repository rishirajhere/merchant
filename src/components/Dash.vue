<template>
    <div>
         <h1> Welcome to your Dashboard </h1>
         <div class="todos"> 
             <div v-for="todo in allTodos" :key="todo.id" class="todo">
                 <img :src="todo.url"><br>
                <b>Name of product:</b> {{todo.name}}<br>
                <b>Quantity:</b> {{todo.username}}
                
                <br>
                <b>Price: Rs.</b>
                {{todo.id}}
                
                <br>
                <div class="update">


                <router-link tag="button" to="/updateProduct">Update</router-link>
                </div>
             </div>
         </div>
    </div>

</template>
<script>

import { mapGetters, mapActions } from 'vuex';
export default {
    name : "Dash",
    methods: {  
        ...mapActions(['search']),

    }, 
    computed: mapGetters(['allTodos'])
    ,
    created(){
        this.$store.dispatch('search'); 
    }
}
</script>
<style scoped>
.todos{
    display: grid;
    grid-template-columns: repeat(1,1fr);
    grid-gap: 1rem;
}

.todo{
    border: 1px solid #ccc;
    background: #F7937D;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    
}
.update{
    
  /* background-color: #4CAF50;   */
  border: none;
  color: rgb(145, 48, 48); 
   padding: 10px; 
   text-align: center; 
   text-decoration: none; 
   display: inline-block;
   font-size: 50px;
   /* cursor: pointer;  */

}

img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 300px;
}

</style>