import Vue from 'vue'
import Vuex from 'vuex'

import login from './login.js'
import goods from './goods.js'
import cart from './cart.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    login,
    goods,
    cart
  },
  state:{
    tabSelect: "/",   //选中的 tab 
    viewHeight:667,
  },
  actions:{
    setTabSelect({commit},{path}){
      commit("setTabSelect",{path})    
    }
  },
  mutations:{
    setTabSelect(state,{path}){
      state.tabSelect = path
    }
  }
})