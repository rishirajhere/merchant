<template>
  <div>
    <header>
<br><br><br>
<h1>Add Shoe</h1>

<form>
           
           Shoe Brand <input type="text" id="shoeBrand" required v-model="Shoe_Name"><br><br>
           Shoe Description <input type ="text" id="mobileDescription" required v-model="Shoe_Description"><br><br>
           Size <input type ="number" id="shoeSize" required v-model="Shoe_Size"><br><br>
           No. of shoes to sell <input type ="number" id="quantity" required v-model="Shoe_Quantity"><br><br>
           Set price for shoe <input type ="number" id="price" required v-model="Shoe_Price"><br><br>
           Preferable for:<br>
           <input type="radio" name="gender" id="gender" value="men" v-model="Shoe_Gender"> Men<br>
           <input type="radio" name="gender" id="gender" value="women" v-model="Shoe_Gender"> Women<br><br>
           Upload Front Image <input type ="file" id="imageUrl1" required v-bind:src="Shoe_URL1"><br><br>
           Upload side Angle Image <input type ="file" id="imageUrl2" required v-bind:src="Shoe_URL2"><br><br>
           Upload back Angle Image <input type ="file" id="imageUrl3" required v-bind:src="Shoe_URL3"> <br><br>
           <input type="submit" value="Add Shoe"></form>
    </header>

  </div>
</template>

<script>
export default {
  name: 'AddShoes',
  data: function () {
        return {
            Shoe_Name: '',
            Shoe_Description: '',
            Shoe_Size: '',
            Shoe_Quantity: '',
            Shoe_Price: '',
            Shoe_Gender: '',
            Shoe_URL1: '',
            Shoe_URL2: '',
            Shoe_URL3: ''
        }
    }
,
    methods: {
        initiateLogin() {
            const data = {
                Shoe_Name: this.Shoe_Name,
                Shoe_Description: this.Shoe_Description,
                Shoe_Size: this.Shoe_Size,
                Shoe_Quantity: this.Shoe_Quantity,
                Shoe_Price: this.Shoe_Price,
                Shoe_Gender: this.Shoe_Gender,
                Shoe_URL1: this.Shoe_URL1,
                Shoe_URL2: this.Shoe_URL2,
                Shoe_URL3: this.Shoe_URL3

            }
            this.$store.dispatch('Shoes', {
                data,
                success: this.onLoginSuccess,
                fail: this.onLoginFail
            })
        },
        onLoginSuccess () {
            this.$router.push({name: '/'})
        },
        onLoginFail () {
            this.$router.push({name: 'errorPage'});
        }
    }
}
</script>

<style>

</style>


