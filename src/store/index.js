import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      boxshow:false
    }
  },
  actions:{
      changebox({commit},payload){
        commit('changed',payload)
      }
  },
  mutations: {
    changed(state,payload){
      return state.boxshow=payload
    }
  },
 

})


export default store;