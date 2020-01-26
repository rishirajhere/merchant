<template>
    <div>
         <h1> Welcome to your Dashboard </h1>
         <div class="todos"> 
             <div v-for="todo in allTodos" :key="todo.id" class="todo">
                 <img :src="todo.url1"><br>
                 <img :src="todo.url2"><br>
                 <img :src="todo.url3"><br>
                 
                <b>Name of product:</b> {{todo.productName}}<br>
                <b>Quantity:</b> {{todo.totalSellingQuantity}}<br>
                <b>Price:</b> {{todo.price}}<br>
                <b>About product:</b> {{todo.description}}<br>
                <b>Product Rating:</b> {{todo.productRating}}<br>
                <b>Category:</b> {{todo.categoryName}}<br>
                <!-- <b>productId:</b> {{todo.productId}}<br>
                <b>merchantAndProductId:</b> {{todo.merchantAndProductId}}<br> -->
                <b>Selling Price:</b> {{todo.sellingPrice}}<br><br><br>
                
                <div class="update">
                    <h4>Update Price, Quantity of this product</h4>
                    <form>
                        New Quantity <input type="number" id="quantity1" required v-model="quantity"><br><br>
                        New Price <input type="number" id="price1" required v-model="sellingPrice"><br><br>
                        <!-- <input type="hidden" v-model="merchantAndProductId" :value=todo.merchantAndProductId> -->
                        <button @click="initiateUpdate(todo)">Update Product</button>
                    </form>
                </div>
             </div>
         </div>
    </div>

</template>
<script>

import { mapGetters } from 'vuex';
export default {
    name : "Dash",

    data: function (){
        return {
            quantity:'',
            sellingPrice: '',
            merchantAndProductId: '',
            productId:''
            
        }
    },

    // var payload = JSON.parse(localStorage.getItem('payload'));
    methods: {
    
        initiateUpdate(todo){
            const data = {
                quantity: this.quantity,
                sellingPrice: this.sellingPrice,
                merchantAndProductId: todo.merchantAndProductId,
                productId: todo.productId
            }
            this.$store.dispatch('updateProduct', {
                data,
                success: this.onAddingSuccess,
                fail: this.onAddingFail 
            })

        },
        onAddingSuccess () {
            this.$router.push({name: '/'})
        },
        onAddingFail () {
            this.$router.push({name: 'errorPage'});
        },




    }, 
    computed: mapGetters(['allTodos']),
    // ...mapActions(['search'])
    
    created(){
        this.$store.dispatch('search',41); 
        // this.search() 
        window.console.log(this.merchantAndProductId)
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
    background: rgb(243, 126, 100);
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    
}
.update{
 border: none;
  color: rgb(145, 48, 48); 
   padding: 10px; 
}

img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 300px;
}
</style>