<template>
  <div>
    <header>
<br><br><br>
<h1>Add Mobile</h1>
 <h2>Add Mobile from list</h2><br>
        <!-- <form> -->
                <select @change="setProduct($event)" v-model="selectedProduct">
                    <!-- <option>Select Mobile</option> -->
                        <option v-for="n in getDataFromStore" :key="n.merchantAndProductId"  :value="n.productId">
                            {{n.productName}}, Rating:{{n.productRating}}</option>
                </select><br><br><br>
                Add number of Mobile to sell <input type="number" id="quantity" v-model="selectedQuantity"><br><br>
                Set price of Mobile <input type="number" id="price" v-model="selectedPrice"><br><br>
                <button @click="selectedAdd">Add Mobile to Sell</button>


        <!-- </form> -->

        <br><br><br><br><br><br><br><br>
        <hr>
        <h2>Can't find your Mobile from the list?</h2>
        <h3>No worries</h3>
        <h2>Add your own Mobile</h2><br><br><br><br><br>

        <!-- <form> -->
           Mobile Name  <input type ="text" id="mobileName" required v-model="productName"><br><br>
           Mobile Brand <input type="text" id="mobileBrand" required v-model="brand"><br><br>
           Mobile Description <input type ="text" id="mobileDescription" required v-model="description"><br><br>
           RAM <input type ="text" id="mobileRam" required v-model="Mobile_RAM"><br><br>
           Storage <input type ="text" id="mobileStorage" required v-model="Mobile_Storage"> <br><br>
           No. of mobiles to sell <input type ="number" id="quantity1" required v-model="quantity"><br><br>
           Set price for mobile <input type ="number" id="price2" required v-model="price"><br><br>
           Set Selling price for mobile <input type ="number" id="price1" required v-model="sellingPrice"><br><br>
           Enter Url of Front Image <input type ="text" id="imageUrl1"  v-model="url1" required><br><br>
           Enter Url of Side Angle Image <input type ="text" id="imageUrl2"  v-model="url2" required><br><br>
           Enter Url of Back Image <input type ="text" id="imageUrl3"  v-model="url3" required><br><br>
           <button @click="initiateAddingMobile">Add Mobile</button>
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
            // productId:'',

//==================================
            Mobile_RAM:'',
            Mobile_Storage:'',
            brand:'',
            productId: '',
            productRating:'',
            revenue:'',
            merchantAndProductId:'',
            totalSellingQuantity:'',
            merchantId:'',

//==================================
            
            

            productName: '',
            price: '',
            description: '',
            quantity: '',
            sellingPrice:'',
            url1:'',
            url2:'',
            url3:'',
            categoryName:'mobile',
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
            // data,
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
            window.console.log(this.productId)
            const data = {
                    productId: this.productId,
                    quantity: this.selectedQuantity,
                    sellingPrice: this.selectedPrice,
                    merchantId:42
            }
            // window.console.log('in function')
            window.console.log(data)
            this.$store.dispatch('addSelectedProduct', {
                data: data,
                success: this.onAddingSuccess,
                fail: this.onAddingFail 
            })

        },


        initiateAddingMobile() {
            window.console.log("hey I am here")
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
                categoryName:'mobile',
                attributes:{
                        attribute1: this.Mobile_RAM,
                        attribute2: this.Mobile_Storage,
                        attribute3: this.brand
                }

            }
            window.console.log("Logging data:"+data);
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

</style>


