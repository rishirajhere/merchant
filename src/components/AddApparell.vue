<template>
  <!-- <div > -->
       <div class="z">
    <header>
<br><br><br>
<div class="b">
<h1>Add Apparel</h1>


        <h2>Add Apparel from list</h2><br>
        <!-- <form> -->
               <select @change="setProduct($event)" v-model="selectedProduct">
                        <option v-for="n in getDataFromStore" :key="n.merchantAndProductId"  :value="n.productId">
                            {{n.productName}}, Rating:{{n.productRating}} </option>
                </select><br><br><br> 
                Add number of Apparel to sell <input type="number" id="quantity" v-model="selectedQuantity"><br><br>
                Set price of Apparel <input type="number" id="price" v-model="selectedPrice"><br><br>
                <button @click="selectedAdd">Add Apparel to Sell</button>


        <!-- </form> -->
        </div>

        <br><br><br><br><br><br><br><br>
        <!-- <hr> -->
        <div class="b">
        <h2>Can't find your Apparel from the list?</h2>
        <h3>No worries</h3>
        <h2>Add your own Apparel</h2><br><br><br><br><br>

        <!-- <form> -->
           Apparel Name  <input type ="text" id="apparelName" required v-model="productName"><br><br>
           <!-- Apparel Brand <input type="text" id="apparelBrand" required v-model="brand"><br><br> -->
           Apparel Description <input type ="text" id="apparelDescription" required v-model="description"><br><br>
           <!-- Material <input type ="text" id="apparelMaterial" required v-model="material"><br><br> -->
           Colour <input type ="text" id="apparelColour" required v-model="colour"><br><br>
           No. of apparels to sell <input type ="number" id="quantity1" required v-model="quantity"><br><br>
           Preferable for:<br>
           <input type="radio" name="gender"  value="men" required v-model="gender"> Men<br>
           <input type="radio" name="gender"  value="women" required v-model="gender"> Women<br><br>
           Size: 
           <select id="apparelSize" v-model="size">
                <option value="Small" >Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                <option value="Extra Large">Extra Large</option>
           </select><br><br>
           Original price for apparel <input type ="number" id="price1" required v-model="price"><br><br>
           Set Selling price for apparel <input type ="number" id="price" required v-model="sellingPrice"><br><br>
           Enter Url of Front Image <input type ="text" id="imageUrl1"  v-model="url1" required><br><br>
           Enter Url of Side Angle Image <input type ="text" id="imageUrl2"  v-model="url2" required><br><br>
           Enter Url of Back Image <input type ="text" id="imageUrl3"  v-model="url3" required><br><br>
           <!-- <input type="submit" @click="initiateAddApparel"  value="Add Apparel"> -->
           <button @click="initiateAddApparel">Save</button>
        <!-- </form> -->

        </div>

    </header>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {

    name:'apparel',

data: function () {
        return {

            selectedProduct:'',
            selectedQuantity:'',
            selectedPrice:'',
            colour:'',
            size: '',
            gender:'',

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
            categoryName:'apparel',
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
    },
    methods: { 
        ...mapActions(['getDataFromDatabaseUsingApi']),
            setProduct(event){
            this.productId = event.target.value
        },

        selectedAdd(){

            const data = {
                    productId: this.productId,
                    selectedProduct: this.selectedProduct,
                    selectedQuantity: this.selectedQuantity,
                    selectedPrice: this.selectedPrice,
            }


            this.$store.dispatch('addSelectedProduct', {
                data: data,
                success: this.onAddingSuccess,
                fail: this.onAddingFail 
            })

        },




        initiateAddApparel() {
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
                categoryName:'apparel',
                attributes:{
                        attribute1: this.gender,
                        attribute2: this.size,
                        attribute3: this.colour
                }
            }
            // eslint-disable-next-line no-debugger
            debugger
            this.$store.dispatch('addToDatabase', {
                data: data,
                success: this.onAddingSuccess,
                fail: this.onAddingFail 
            })
        },
        onAddingSuccess () {
            // this.$router.push({name: '/'})
        },
        onAddingFail () {
            this.$router.push({name: 'errorPage'}); 
        },
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
.b{
     border: 2px solid black;
    margin-left: 450px;
    margin-right: 450px;
    border-radius: 20px;
    background-color: #CCFFDD;
}
.c{
    background-color: black;
    color: white;
}
.z{
    background-image: url('../assets/app.jpg');
    background-size: 100%;
}
</style>