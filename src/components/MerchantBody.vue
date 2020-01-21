<template>
  <div>
    <header>
        Logo
        <img url="/Users/rishiraj/Documents/vueproj/src/assets/logo.png">
        <button>Product Description</button>
        <button>Logout</button>




<br><br><br><br>
        <form method="POST" action="TODO">
           Name of Product <input type ="text" id="productName"><br><br>
           Description of product <input type ="text" id="productDescription"><br><br>
           Quantity to sell<input type ="number" id="quantity"><br><br>
           Set price of product<input type ="number" id="price"><br><br>
           <input type="submit" value="Add Product">


        </form>



    </header>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>


