<template>
  <div>
    <header>
<br><br><br>
<h1>Add Mobile</h1>

        <form method="POST" action="">
           Mobile Name  <input type ="text" id="mobileName" required v-model="Mobile_Name"><br><br>
           Mobile Brand <input type="text" id="mobileBrand" required v-model="Mobile_Brand"><br><br>
           Mobile Description <input type ="text" id="mobileDescription" required v-model="Mobile_Description"><br><br>
           RAM <input type ="text" id="mobileRam" required v-model="Mobile_RAM"><br><br>
           Storage <input type ="text" id="mobileStorage" required v-model="Mobile_Storage"> <br><br>
           Colour <input type ="text" id="mobileColour" required v-model="Mobile_Colour"><br><br>
           No. of mobiles to sell <input type ="number" id="quantity" required v-model="Mobile_Quantity"><br><br>
           Set price for mobile <input type ="number" id="price" required v-model="Mobile_Price"><br><br>
           Upload Front Image <input type ="file" id="imageUrl1" required v-bind:src="Mobile_URL1"><br><br>
           Upload side Angle Image <input type ="file" id="imageUrl2" required v-bind:src="Mobile_URL2"><br><br>
           Upload back Angle Image <input type ="file" id="imageUrl3" required v-bind:src="Mobile_URL3"><br><br>
           <input type="submit" value="Add Mobile">
        </form>



    </header>

  </div>
</template>

<script>
export default {
data: function () {
        return {
            Mobile_Name: '',
            Mobile_Brand: '',
            Mobile_Description: '',
            Mobile_RAM: '',
            Mobile_Storage: '',
            Mobile_Colour: '',
            Mobile_Quantity: '',
            Mobile_Price: '',
            Mobile_URL1: '',
            Mobile_URL2: '',
            Mobile_URL3: ''

        }
    }

    ,
    methods: {
        initiateLogin() {
            const data = {
                Mobile_Name: this.Mobile_Name,
                Mobile_Brand: this.Mobile_Brand,
                Mobile_Description: this.Mobile_Description,
                Mobile_RAM: this.Mobile_RAM,
                Mobile_Storage: this.Mobile_Storage,
                Mobile_Colour: this.Mobile_Colour,
                Mobile_Quantity: this.Mobile_Quantity,
                Mobile_Price: this.Mobile_Price,
                Mobile_URL1: this.Mobile_URL1,
                Mobile_URL2: this.Mobile_URL3,
                Mobile_URL3: this.Mobile_URL3

            }
            this.$store.dispatch('Mobile', {
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


