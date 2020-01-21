<template>
  <div>
    <header>
<br><br><br>
<h1>Add Apparel</h1>

        <form method="POST" action="">
           Apparel Name  <input type ="text" id="apparelName" required v-model="Apparel_Name"><br><br>
           Apparel Brand <input type="text" id="apparelBrand" required v-model="Apparel_Brand"><br><br>
           Apparel Description <input type ="text" id="apparelDescription" required v-model="Apparel_Description"><br><br>
           Material <input type ="text" id="apparelMaterial" required v-model="Material"><br><br>
           Colour <input type ="text" id="apparelColour" required v-model="Apparel_Colour"><br><br>
           No. of apparels to sell <input type ="number" id="quantity" required v-model="Apparel_Quantity"><br><br>
           Preferable for:<br>
           <input type="radio" name="gender" id="gender" value="men" required v-model="Apparel_Gender"> Men<br>
           <input type="radio" name="gender" id="gender" value="women" required v-model="Apparel_Gender"> Women<br><br>
           Size: 
           <select id="size" v-model="Apparel_Size">
                <option value="Small" >Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                <option value="Extra Large">Extra Large</option>
           </select><br><br>
           Set price for apparel <input type ="number" id="price" required v-model="Apparel_Price"><br><br>
           Upload Front Image <input type ="file" id="imageUrl1" required v-bind:src="Apparel_URL1"><br><br>
           Upload Side Angle Image <input type ="file" id="imageUrl2" required v-bind:src="Apparel_URL2"><br><br>
           Upload Back Image <input type ="file" id="imageUrl3" required v-bind:src="Apparel_URL3"><br><br>
           <input type="submit" value="Add Apparel">
        </form>



    </header>

  </div>
</template>

<script>
export default {
data: function () {
        return {
            Apparel_Name: '',
            Apparel_Brand: '',
            Apparel_Description: '',
            Material: '',
            Apparel_Colour: '',
            Apparel_Quantity: '',
            Apparel_Gender: '',
            Apparel_Size: '',
            Apparel_Price: '',
            Apparel_URL1: '',
            Apparel_URL2: '',
            Apparel_URL3: ''

        }
    },
    methods: {
        initiateLogin() {
            const data = {
                Apparel_Name: this.Apparel_Name,
                Apparel_Brand: this.Apparel_Brand,
                Apparel_Description: this.Apparel_Description,
                Material: this.Material,
                Apparel_Colour: this.Apparel_Colour,
                Apparel_Quantity: this.Apparel_Quantity,
                Apparel_Gender: this.Apparel_Gender,
                Apparel_Size: this.Apparel_Size,
                Apparel_Price: this.Apparel_Price,
                Apparel_URL1: this.Apparel_URL1,
                Apparel_URL2: this.Apparel_URL2,
                Apparel_URL3: this.Apparel_URL3

            }
            this.$store.dispatch('Apparell', {
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






