<template>
  <div>
    <header>
<br><br><br>
<h1>Add Watch</h1>
 <h2>Add Watch from list</h2><br>
        <!-- <form> -->
                 <select @change="setProduct($event)" v-model="selectedProduct">
                    <!-- <option>Select Watch</option> -->
                        <option v-for="n in getDataFromStore" :key="n.merchantAndProductId" :value="n.productId">
                            {{n.productName}}, Rating:{{n.productRating}} </option>
                </select><br><br><br>
                Add number of Watch to sell <input type="number" id="quantity" v-model="selectedQuantity"><br><br>
                Set price of Watch <input type="number" id="price" v-model="selectedPrice"><br><br>
                <button @click="selectedAdd">Add Watch to Sell</button>


        <!-- </form> -->

        <br><br><br><br><br><br><br><br>
        <hr>
        <h2>Can't find your Watch from the list?</h2>
        <h3>No worries</h3>
        <h2>Add your own Watch</h2><br><br><br><br><br>

        <!-- <form> -->
           Watch Name  <input type ="text" id="watchName" required v-model="productName"><br><br>
           Watch Brand <input type="text" id="watchBrand" required v-model="brand"><br><br>
           Watch Description <input type ="text" id="watchDescription" required v-model="description"><br><br>
           Colour <input type ="text" id="watchColour" required v-model="colour"><br><br>
           No. of watches to sell <input type ="number" id="quantity" required v-model="quantity"><br><br>
           Watch type: <br>
           <input type="radio" name="type" id="type" value="analog" v-model="Watch_Type"> Analog<br>
           <input type="radio" name="type" id="type" value="digital" v-model="Watch_Type"> Digital<br><br>
           Set price for watch <input type ="number" id="price" required v-model="price"><br><br>
           Set Selling price for apparel <input type ="number" id="price1" required v-model="sellingPrice"><br><br>
           Enter Url of Front Image <input type ="text" id="imageUrl1"  v-model="url1" required><br><br>
           Enter Url of Side Angle Image <input type ="text" id="imageUrl2"  v-model="url2" required><br><br>
           Enter Url of Back Image <input type ="text" id="imageUrl3"  v-model="url3" required><br><br>
           <button @click="initiateAddingWatch">Add Watch to sell</button>
        <!-- </form> -->



    </header>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
data: function () {
        return {
            selectedProduct:'',
            selectedQuantity:'',
            selectedPrice:'',
            Watch_Type:'',
            brand:'',
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
            price: '',
            description: '',
            quantity: '',
            sellingPrice:'',
            url1:'',
            url2:'',
            url3:'',
            categoryName:'watch',
            attributes:{
                    attribute1: '',
                    attribute2: '',
                    attribute3: ''

            },
        }
    },
    created(){ 
        //called automatically when this component reloaded...
        this.$store.dispatch('getDataFromDatabaseUsingApi',{
            // name,
            success: this.getting,
            fail: this.getFail
        })
    },
    computed: {
         ...mapGetters(['getDataFromStore'])
    }
    ,
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
                    productId: this.productId,
            }


            this.$store.dispatch('addSelectedProduct', {
                data: data,
                success: this.onAddingSuccess,
                fail: this.onAddingFail 
            })

        },

        initiateAddingWatch() {
            const data = {

                productId: '',
                productRating:'',
                revenue:'',
                merchantAndProductId:'',
                totalSellingQuantity:'',



                productName: this.productName,
                description: this.description,
                quantity: this.quantity,
                price: this.price,
                sellingPrice: this.sellingPrice,
                url1: this.url1,
                url2: this.url2,
                url3: this.url3,
                categoryName:'watch',
                attributes:{
                        attribute1: this.Watch_Type,
                        attribute2: this.brand,
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


