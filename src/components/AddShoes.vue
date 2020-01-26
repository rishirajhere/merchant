<template>
  <div>
    <header>
<br><br><br>
<h1>Add Shoe</h1>
 <h2>Add Shoe from list</h2><br>
        <!-- <form> -->
                <select @change="setProduct($event)" v-model="selectedProduct" >
                    <option>Select Shoe</option>
                        <option v-for="n in getDataFromStore" :key="n.merchantAndProductId" :value="n.productId">
                            {{n.productName}}, Rating:{{n.productRating}} </option>
                </select><br><br><br>
                Add number of Shoe to sell <input type="number" id="quantity" v-model="selectedQuantity"><br><br>
                Set price of Shoe <input type="number" id="price" v-model="selectedPrice"><br><br>
                <button @click="selectedAdd">Add Shoe to Sell</button>


        <!-- </form> -->

        <br><br><br><br><br><br><br><br>
        <hr>
        <h2>Can't find your Shoe from the list?</h2>
        <h3>No worries</h3>
        <h2>Add your own Shoe</h2><br><br><br><br><br>

<!-- <form> -->
           
           Shoe Brand <input type="text" id="shoeBrand" required v-model="productName"><br><br>
           Shoe Description <input type ="text" id="mobileDescription" required v-model="description"><br><br>
           Size <input type ="number" id="shoeSize" required v-model="Shoe_Size"><br><br>
           Colour <input type ="text" id="shoeColour" required v-model="colour"><br><br>
           No. of shoes to sell <input type ="number" id="quantity" required v-model="quantity"><br><br>
           Set price for shoe <input type ="number" id="price" required v-model="price"><br><br>
           Preferable for:<br>
           <input type="radio" name="gender" id="gender" value="men" v-model="Shoe_Gender"> Men<br>
           <input type="radio" name="gender" id="gender" value="women" v-model="Shoe_Gender"> Women<br><br>
           Set Selling price for shoe <input type ="number" id="price1" required v-model="sellingPrice"><br><br>
           Enter Url of Front Image <input type ="text" id="imageUrl1"  v-model="url1" required><br><br>
           Enter Url of Side Angle Image <input type ="text" id="imageUrl2"  v-model="url2" required><br><br>
           Enter Url of Back Image <input type ="text" id="imageUrl3"  v-model="url3" required><br><br>
           <button @click="initiateAddingShoe">Add Shoe</button>
    </header>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'AddShoes',
  data: function () {
        return {


            selectedProduct:'',
            selectedQuantity:'',
            selectedPrice:'',
            Shoe_Size:'',
            Shoe_Gender:'',
            colour:'',


//=================================
            productId: '',
            productRating:'',
            revenue:'',
            merchantAndProductId:'',
            totalSellingQuantity:'',
            merchantId:'',

//=================================


            productName: '',
            description: '',
            // Shoe_Size: '',
            sellingPrice:'',
            quantity: '',
            price: '',
            // Shoe_Gender: '',
            url1:'',
            url2:'',
            url3:'',
            categoryName:'shoe',
            attributes:{
                    attribute1: '',
                    attribute2: '',
                    attribute3: ''

            }
        }
    }
,
  created(){ 
        //called automatically when this component reloaded...
        this.$store.dispatch('getDataFromDatabaseUsingApi',{
            // name,
            success: this.getting,
            fail: this.getFail
        })
    },
    computed: {
        ...mapGetters(['getDataFromStore'])},
    methods: {
         ...mapActions(['getDataFromDatabaseUsingApi']),
        setProduct(event){
            this.productId = event.target.value
        },

        selectedAdd(){

            const data = {
                    selectedProduct: this.selectedProduct,
                    selectedQuantity: this.selectedQuantity,
                    selectedPrice: this.selectedPrice,
                    productId: this.productId
            }


            this.$store.dispatch('addSelectedProduct', {
                data: data,
                success: this.onAddingSuccess,
                fail: this.onAddingFail 
            })

        },



        initiateAddingShoe() {
            const data = {





                productId: '',
                productRating:'',
                revenue:'',
                merchantAndProductId:'',
                totalSellingQuantity:'',







            productName: this.productName,
            description: this.description,
            // Shoe_Size: '',
            sellingPrice: this.sellingPrice,
            quantity: this.quantity,
            price: this.price,
            // Shoe_Gender: '',
            url1: this.url1,
            url2: this.url2,
            url3: this.url3,
            categoryName:'shoe',
            attributes:{
                    attribute1: this.Shoe_Size,
                    attribute2: this.Shoe_Gender,
                    attribute3: this.colour

            }
            }
            this.$store.dispatch('addToDatabase', {
                data: data,
                success: this.onAddingSuccess,
                fail: this.onAddingFail
            })
        },
        onAddingSuccess () {
            this.$router.push({name: '/'})
        },
        onAddingFail () {
            this.$router.push({name: 'errorPage'});
        }
        ,
        getting(){
            window.console.log("Data came from database")
        },
        getFail(){
            window.console.log("Something went wrong") 
        }
    }
}
</script>

<style>

</style>


