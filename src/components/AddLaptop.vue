<template>
  <div class="back">
    <header>
<br><br><br>
<div class="ab">
<h1>Add Laptop</h1>

 <h2>Add Laptop from list</h2><br>
        <!-- <form> -->
                <select @change="setProduct($event)" v-model="selectedProduct">
                    <!-- <option>Select Laptop</option> -->
                        <option v-for="n in getDataFromStore" :key="n.merchantAndProductId" :value="n.productId">
                            {{n.productName}}, Rating:{{n.productRating}} </option>
                </select><br><br><br>
                Add number of Laptop to sell <input type="number" id="quantity" v-model="selectedQuantity"><br><br>
                Set price of Laptop <input type="number" id="price" v-model="selectedPrice"><br><br>
                <button @click="selectedAdd">Add Laptop to Sell</button>


        <!-- </form> -->
</div>
        <br><br><br><br><br><br><br><br>
        <div class="ab">
        <h2>Can't find your Laptop from the list?</h2>
        <h3>No worries</h3>
        <h2>Add your own Laptop</h2><br><br><br><br><br>

        <!-- <form> -->
           Laptop Name  <input type ="text" id="laptopName" required v-model="productName"><br><br>
           Laptop Brand <input type="text" id="laptopBrand" required v-model="Laptop_Brand"><br><br>
           Laptop Description <input type ="text" id="laptopDescription" required v-model="description"><br><br>
           RAM <input type ="text" id="laptopRam" required v-model="Laptop_RAM"><br><br>
           Storage <input type ="text" id="laptopStorage" required v-model="Laptop_Storage"><br><br>
           <!-- Colour <input type ="text" id="laptopColour" required v-model="Laptop_Colour"><br><br> -->
           No. of laptops to sell <input type ="number" id="quantity" required v-model="quantity"><br><br>
           Set price for laptop <input type ="number" id="price" required v-model="price"><br><br>
           Set Selling price for laptop <input type ="number" id="price1" required v-model="sellingPrice"><br><br>
           Enter Url of Front Image <input type ="text" id="imageUrl1"  v-model="url1" required><br><br>
           Enter Url of Side Angle Image <input type ="text" id="imageUrl2"  v-model="url2" required><br><br>
           Enter Url of Back Image <input type ="text" id="imageUrl3"  v-model="url3" required><br><br>
           <button @click="initiateAddingLaptop">Add Laptop</button>
        <!-- </form> -->
        </div>


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
            


//========================================

            Laptop_Brand:'',
            Laptop_RAM:'',
            Laptop_Storage:'',
            productId: '',
            productRating:'',
            revenue:'',
            merchantAndProductId:'',
            totalSellingQuantity:'',
            merchantId:'',


//========================================

            productName: '',
            description: '',
            sellingPrice:'',
            quantity: '',
            Laptop_Colour: '',
            price: '',
            url1: '',
            url2: '',
            url3: '',
            categoryName:'laptop',
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
                    productId: this.productId,
                    selectedProduct: this.selectedProduct,
                    quantity: this.selectedQuantity,
                    price: this.selectedPrice,
                    merchantId:42
            }


            this.$store.dispatch('addSelectedProduct', {
                data: data,
                success: this.onAddingSuccess,
                fail: this.onAddingFail 
            })

        },



        initiateAddingLaptop() {
            const data = {

                
                productId: '',
                productRating:'',
                revenue:'',
                merchantAndProductId:'',
                totalSellingQuantity:'',






                productName: this.productName,
                description: this.description,
                sellingPrice: this.sellingPrice,
                quantity: this.quantity,
                price: this.price,
                url1: this.url1,
                url2: this.url2,
                url3: this.url3,
                categoryName:'laptop',
                attributes:{
                        attribute1: this.Laptop_Brand,
                        attribute2: this.Laptop_RAM,
                        attribute3: this.Laptop_Storage

            },

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
.ab{
    border: 2px solid black;
    margin-left: 450px;
    margin-right: 450px;
    border-radius: 20px;
    background-color: #CCCCFF;
}
.button{
     background-color: black;
    color: white;
}
.back{
    background-image: url('../assets/laptop3.jpg')
}
</style>