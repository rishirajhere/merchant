<template>
    <div>
         <h1> Welcome to your Dashboard </h1>
         <div class="todos"> 
             <div v-for="todo in allTodos" :key="todo.id" class="todo">
                {{todo.title}}
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
    grid-template-columns: repeat(3,1fr);
    grid-gap: 1rem;
}

.todo{
    border: 1px solid #ccc;
    background: #F7937D;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
}
</style>