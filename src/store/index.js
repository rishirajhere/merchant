import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
      todos:[],
      isLogged:false,
      loginInfo: {},
      availableProduct: {},
      merchant_profile:{},
      fbToken:{},
      googleToken:{}
      
  },
  mutations: {
    
    setTodos: (state , todos) =>  (state.todos = todos),

    LOGIN_RESPONSE(state,data){
        state.loginInfo=data
    },

    SET_PRODUCT_DATA(state,data){
      state.availableProduct=data;
    },
    SET_MERCHANT_PROFILE(state,data)
    {
      state.merchant_profile=data
    },
    SET_FB_TOKEN(state,data)
    {
      state.fb_token=data
    },
    SET_GOOGLE_TOKEN(state,data)
    {
      state.googleToken=data
    }

    // LOGOUT(state,isLogged){
    //    this.state.isLogged=false//                   TODO
    // }

  },
  actions: {

    //Get data from database for dropdown box

    getDataFromDatabaseUsingApi(context, { success, fail}){
      fetch('http://10.177.68.16:8082/merchantAndProduct/get/mobile', {
          method: 'GET',
          // body: JSON.stringfy(data)   Used during POST
        })
        .then(res => res.json())
        .then(res => {  
          window.console.log(res)        
          context.commit('SET_PRODUCT_DATA',res)
          window.console.log(this.state.availableProduct)
          success && success(res)
        
        }).catch(err => {
          window.console.log(err)
  
          fail && fail()
        })

    },


    //Fetch data for dashboard

    search(context,data) {
      // eslint-disable-next-line no-debugger
        fetch('http://10.177.68.16:8082/merchantAndProduct/dashbord/'+data, {
          method: 'GET',
          // body: JSON.stringfy(data)
        })
        .then(res => res.json())
        .then(res => {
          context.commit('setTodos',res)

        //   success && success(res)
          
        // }).catch(err => {
        //         window.console.log(err)
                // fail  && fail()
        })

      },

      // Add new product

      addToDatabase(context, {data, success, fail}){
        window.console.log(data);
        // eslint-disable-next-line no-debugger
        // debugger
            fetch('http://10.177.68.16:8082/product/addProduct',{
              method: 'POST',
              body: JSON.stringify(data),
              headers:{
                'Content-Type': 'application/json'
              }
            })
            .then(res => res.json())
            .then(res => {
              window.console.log(res)  
              success && success(res)      
            })
            .catch(err =>{
              window.console.log(err)
              window.console.log("Not added")
              fail && fail()
            })


      },

      loginUser(context,{data,success,fail})  {
            fetch('http://:8082/', {
              method: 'POST',
              body: JSON.stringify(data),
              headers: {
                'content-type': 'application/json'
              }

            }).then(res => res.json())
            .then(res=>{
              context.commit('LOGIN_RESPONSE',{ 
                ...res })
                

            
            
            success && success(res)

          })
          .catch(err => {
            window.console.log(err)

            fail && fail()
          })
  },


      logout(context,{loginInfo,success,fail}){
          window.console.log(loginInfo)
          fetch('http://jsonplaceholder.typicode.com/posts', {
              method: 'POST',
              body: JSON.stringify(loginInfo),
              header: {
                'content-type': 'application/json'
              }

            }).then(res => res.json())
            .then(res=>{
              context.commit('LOGOUT',{ 
                ...res })

            success && success(res)
          })
          .catch(err => {
            window.console.log(err)

            fail && fail()
          })
        


      },

      updateProduct(context,{data,success,fail}){
            fetch('http://10.177.68.16:8082/merchantAndProduct/add',{
              method: 'POST',
              body: JSON.stringify(data),
              headers: {
                'Content-Type': 'application/json'
              }
            })
            .then(res => res.json())
            .then(res => {
              // window.console.log(res) 
              // context.commit('') 
              success && success(res)      
            })
            .catch(err =>{
              window.console.log(err)
              fail && fail()
            })
      },


      addSelectedProduct(context,{data,success,fail}){
        // eslint-disable-next-line no-debugger
        // debugger
        window.console.log('in action')
        fetch('http://10.177.68.16:8082/merchantAndProduct/add',{
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(res => {
          window.console.log(res) 
          // context.commit('') 
          success && success(res)      
        })
        .catch(err =>{
          window.console.log(err)
          fail && fail()
        })
      },
      merchant_profile(context,{data,success,fail})
      {
        fetch('htttp://10.177.68.16:8082/merchant',{
          method:'POST',
          body:JSON.stringify(data),
          headers:{
            'Content-type':'application/json'
          }
        }).then(res=>res.json()).then(res=>{
          window.console.log(res)
          context.commit('SET_MERCHANT_PROFILE',res)
          success && success(res)
        }).catch(err=>{
          window.console.log(err)
          fail && fail()
        })
      },
      fbToken(context,{data,success,fail}){
            fetch('https://10.17.1771.636/meer',{
              method:'POST',
              body:JSON.stringify(data),
              headers:{
                'Content-Type':'application/json'
              }
            }).then(res=>res.json()).then(res=>{
              window.console.log(res)
              context.commit('SET_FB_TOKEN',res)
              success && success(res)
            }).catch(err=>{window.console.log(err)
            fail && fail()
            })
      },



googleToken(context,{data,success,fail}){
fetch('http://10.177.69.130/user/addGoogle',{
  method:'POST',
  body:JSON.stringify(data),
  headers:{
    'Content-Type': 'application/json'
  }

}).then(res=>res.json()).then(res=>{
  window.console.log(res)
  context.commit('SET_GOOGLE_TOKEN',res)
  success && success(res)
}).catch(err=>{window.console.log(err)
fail && fail()
})
}
},
  getters: {
    allTodos : (state) => state.todos,
    getDataFromStore(state){
      window.console.log(state.availableProduct)
      return state.availableProduct
    }
  }
})


