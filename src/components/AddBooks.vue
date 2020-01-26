<template>
  <div>
    <header>
<br><br><br>
<h1>Add Book</h1>


 <h2>Add Book from list</h2><br>
        <!-- <form> -->
                <select @change="setProduct($event)" v-model="selectedProduct">
                    <!-- <option>Select Book</option> -->
                        <option v-for="n in getDataFromStore" :key="n.merchantAndProductId"  :value="n.productId">
                            {{n.productName}}, Rating:{{n.productRating}}</option>
                </select><br><br><br>
                Add number of Book to sell <input type="number" id="quantity" v-model="selectedQuantity"><br><br>
                Set price of Book <input type="number" id="price" v-model="selectedPrice"><br><br>
                <button @click="selectedAdd">Add Book to Sell"</button>


        <!-- </form> -->

        <br><br><br><br><br><br><br><br>
        <hr>
        <h2>Can't find your Book from the list?</h2>
        <h3>No worries</h3>
        <h2>Add your own Book</h2><br><br><br><br><br>

        <!-- <form > -->
           Book Name  <input type ="text" id="bookName" required v-model="productName"><br><br>
           Book author <input type ="text" id="bookAuthor" required v-model="Book_author"><br><br>
           Book publisher <input type ="text" id="bookPublisher" required v-model="publisher"><br><br>
           No. of pages <input type ="number" id="numberOfPages" required v-model="pages"><br><br>
           No. of Books to sell <input type ="number" id="quantity" required v-model="quantity"><br><br>
           Book Description <input type ="text" id="bookDescription" required v-model="description"><br><br>
           Set price for book <input type ="number" id="bookPrice" required v-model="price"><br><br>
           Set Selling price for book <input type ="number" id="price" required v-model="sellingPrice"><br><br>
           Enter Url of Front Image <input type ="text" id="imageUrl1" required v-model="url1"><br><br>
           Enter Url of side Angle Image <input type ="text" id="imageUrl2" required v-model="url2"><br><br>
           Enter Url of back Angle Image <input type ="text" id="imageUrl3" required v-model="url3"><br><br>
           <input type="submit" @click="initiateAddBook"  value="Add Book">
        <!-- </form> -->



    </header>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {

  name:'book',


data: function () {
        return {

            selectedProduct:'',
            selectedQuantity:'',
            selectedPrice:'',

//================================================
            Book_author:'',
            publisher:'',
            pages:'',
            productId: '',
            productRating:'',
            revenue:'',
            merchantAndProductId:'',
            totalSellingQuantity:'',
            merchantId:'',

//=================================================

            productName: '',
            price: '',
            description: '',
            quantity: '',
            sellingPrice:'',
            url1: '',
            url2: '',
            url3: '',
            categoryName:'book',
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
        ...mapGetters(['getDataFromStore'])  //Taking the data from store
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
            }


            this.$store.dispatch('addSelectedProduct', {
                data: data,
                success: this.onAddingSuccess,
                fail: this.onAddingFail 
            })

        },



        initiateAddBook() {
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
                categoryName:'book',
                attributes:{
                        attribute1: this.Book_author,
                        attribute2: this.publisher,
                        attribute3: this.pages
                }

            }
            this.$store.dispatch('addToDatabase', {
                data: data,
                success: this.onLAddingSuccess,
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


