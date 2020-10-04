import Vue from 'vue'
import Vuex from 'vuex'

import login from './login.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    login,
  },
  state:{
    tabSelect: "/",   //选中的 tab 
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