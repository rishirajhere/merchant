import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
      todos:[]
      
  },
  mutations: {
    
    setTodos: (state , todos) =>  (state.todos = todos)
   
  },
  actions: {
   

    search(context) {
      // eslint-disable-next-line no-debugger
        fetch('https://jsonplaceholder.typicode.com/todos', {
          method: 'GET',
          // body: data
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

      }


  },
  getters: {
    allTodos : (state) => state.todos
  }
})
