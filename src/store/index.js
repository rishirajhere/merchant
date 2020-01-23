import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
      todos:[],
      isLogged:true,
      loginInfo: {}
      
  },
  mutations: {
    
    setTodos: (state , todos) =>  (state.todos = todos),

    LOGIN_RESPONSE(state,data){
        this.loginInfo=data
    }

   
  },
  actions: {
   

    search(context) {
      // eslint-disable-next-line no-debugger
        fetch('http://jsonplaceholder.typicode.com/photos', {
          method: 'GET',
          // body: JSON.stringfy(data)
        })
        .then(res => res.json())
        .then(res => {
          // commit changes related to user
          window.console.log(res)
          
          context.commit('setTodos',res)
        //   success && success(res)
        // })
        // .catch(err => {
        //   window.console.log(err)
        //   fail && fail()
        })

      },

      loginUser(context,{data,success,fail})  {
        fetch('http://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify(data),
          header: {
            'content-type': 'application/json'
          }

        }).then(res => res.json())
        .then(res=>{
          context.commit('LOGIN_RESPONSE',{ 
            ...res })
        // })

        success && success(res)
      })
      .catch(err => {
        window.console.log(err)

        fail && fail()
      })
  },
},
  getters: {
    allTodos : (state) => state.todos
  }
})
  
  
