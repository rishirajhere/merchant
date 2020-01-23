<template>
  <main class="updateproduct">
      <updateBody/>
      <br>
  <h1> Edit your product</h1>   

<form method ="PUT">
  Enter your updated price <input type="number" id="price"><br><br>
  Enter your number of product to sell <input type="number" id="quantity">
  <br><br>
  <input type="submit" value="Edit Details">
</form>
  </main>
</template>

<script>
import updateBody from '@/components/updateBody'

export default {
    name: 'UpdateProduct',
    components: updateBody
}
</script>

<style>

</style>