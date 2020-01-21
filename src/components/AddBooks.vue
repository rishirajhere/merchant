<template>
  <div>
    <header>
<br><br><br>
<h1>Add Book</h1>

        <form method="POST" action="">
           Book Name  <input type ="text" id="bookName" required v-model="Book_Name"><br><br>
           Book author <input type ="text" id="bookAuthor" required v-model="Book_author"><br><br>
           Book publisher <input type ="text" id="bookPublisher" required v-model="Book_publisher"><br><br>
           No. of pages <input type ="number" id="numberOfPages" required v-model="pages"><br><br>
           Book Description <input type ="text" id="bookDescription" required v-model="Book_Description"><br><br>
           Set price for book <input type ="number" id="bookPrice" required v-model="Book_Price"><br><br>
           Upload Front Image <input type ="file" id="imageUrl1" required v-bind:src="Bookl_URL1"><br><br>
           Upload side Angle Image <input type ="file" id="imageUrl2" required v-bind:src="Book_URL2"><br><br>
           Upload back Angle Image <input type ="file" id="imageUrl3" required v-bind:src="Book_URL3"><br><br>
           <input type="submit" value="Add Book">
        </form>



    </header>

  </div>
</template>

<script>
export default {
data: function () {
        return {
            Book_Name: '',
            Book_author: '',
            Book_publisher: '',
            pages: '',
            Book_Description: '',
            Book_Price: '',
            Bookl_URL1: '',
            Bookl_URL2: '',
            Bookl_URL3: '',

        }
    }
    ,
    methods: {
        initiateLogin() {
            const data = {
                Book_Name: this.Book_Name,
                Book_author: this.Book_author,
                Book_publisher: this.Book_publisher,
                pages: this.pages,
                Book_Description: this.Book_Description,
                Book_Price: this.Book_Price,
                Bookl_URL1: this.Bookl_URL1,
                Bookl_URL2: this.Bookl_URL2,
                Bookl_URL3: this.Bookl_URL3

            }
            this.$store.dispatch('Books', {
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


