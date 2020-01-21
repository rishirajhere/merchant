<template>
  <div>
    <header>
<br><br><br>
<h1>Add Laptop</h1>

        <form method="POST" action="">
           Laptop Name  <input type ="text" id="laptopName" required v-model="Laptop_Name"><br><br>
           Laptop Brand <input type="text" id="laptopBrand" required v-model="Laptop_Brand"><br><br>
           Laptop Description <input type ="text" id="laptopDescription" required v-model="Laptop_Description"><br><br>
           RAM <input type ="text" id="laptopRam" required v-model="Laptop_RAM"><br><br>
           Storage <input type ="text" id="laptopStorage" required v-model="Laptop_Storage"><br><br>
           Colour <input type ="text" id="laptopColour" required v-model="Laptop_Colour"><br><br>
           No. of laptops to sell <input type ="number" id="quantity" required v-model="Laptop_Quantity"><br><br>
           Set price for laptop <input type ="number" id="price" required v-model="Laptop_Price"><br><br>
           Upload Front Image <input type ="file" id="imageUrl1" required v-bind:src="Laptop_URL1"><br><br>
           Upload side Angle Image <input type ="file" id="imageUrl2" required  v-bind:src="Laptop_URL"><br><br>
           Upload back Angle Image <input type ="file" id="imageUrl3" required v-bind:src="Laptop_URL3"><br><br>
           <input type="submit" value="Add Laptop">
        </form>



    </header>

  </div>
</template>

<script>
export default {
data: function () {
        return {
            Laptop_Name: '',
            Laptop_Brand: '',
            Laptop_RAM: '',
            Laptop_Storage: '',
            Laptop_Description: '',
            Laptop_Quantity: '',
            Laptop_Colour: '',
            Laptop_Price: '',
            Laptop_URL1: '',
            Laptop_URL2: '',
            Laptop_URL3: ''

        }
    }
    ,
    methods: {
        initiateLogin() {
            const data = {
                Laptop_Name: this.Laptop_Name,
                Laptop_Brand: this.Laptop_Brand,
                Laptop_RAM: this.Laptop_RAM,
                Laptop_Storage: this.Laptop_Storage,
                Laptop_Description: this.Laptop_Description,
                Laptop_Quantity: this.Laptop_Quantity,
                Laptop_Colour: this.Laptop_Colour,
                Laptop_Price: this.Laptop_Price,
                Laptop_URL1: this.Laptop_URL1,
                Laptop_URL2: this.Laptop_URL2,
                Laptop_URL3: this.Laptop_URL3

            }
            this.$store.dispatch('Laptop', {
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


