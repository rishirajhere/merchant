<template>
  <div>
    <header>
<br><br><br>
<h1>Add Watch</h1>

        <form method="POST" action="">
           Watch Name  <input type ="text" id="watchName" required v-model="Watch_Name"><br><br>
           Watch Brand <input type="text" id="watchBrand" required v-model="Watch_Brand"><br><br>
           Watch Description <input type ="text" id="watchDescription" required v-model="Watch_Description"><br><br>
           Colour <input type ="text" id="watchColour" required v-model="Watch_Colour"><br><br>
           No. of watches to sell <input type ="number" id="quantity" required v-model="Watch_Quantity"><br><br>
           Watch type: <br>
           <input type="radio" name="type" id="type" value="analog" v-model="Watch_Type"> Analog<br>
           <input type="radio" name="type" id="type" value="digital" v-model="Watch_Type"> Digital<br><br>
           Set price for watch <input type ="number" id="price" required v-model="Watch_Price"><br><br>
           Upload Front Image <input type ="file" id="imageUrl1" required v-bind:src="Watch_URL1"><br><br>
           Upload side Angle Image <input type ="file" id="imageUrl2" required v-bind:src="Watch_URL2"><br><br>
           Upload back Angle Image <input type ="file" id="imageUrl3" required v-bind:src="Watch_URL3"><br><br>
           <input type="submit" value="Add Watch">
        </form>



    </header>

  </div>
</template>

<script>
export default {
data: function () {
        return {
            Watch_Name: '',
            Watch_Brand: '',
            Watch_Description: '',
            Watch_Colour: '',
            Watch_Quantity: '',
            Watch_Type: '',
            Watch_Price: '',
            Watch_URL1: '',
            Watch_URL2: '',
            Watch_URL3: ''

        }
    }
    ,
    methods: {
        initiateLogin() {
            const data = {
                Watch_Name: this.Watch_Name,
                Watch_Brand: this.Watch_Brand,
                Watch_Description: this.Watch_Description,
                Watch_Colour: this.Watch_Colour,
                Watch_Quantity: this.Watch_Quantity,
                Watch_Type: this.Watch_Type,
                Watch_Price: this.Watch_Price,
                Watch_URL1: this.Watch_URL1,
                Watch_URL3: this.Watch_URL3,
                Watch_URL2: this.Watch_URL2


            }
            this.$store.dispatch('Watches', {
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


