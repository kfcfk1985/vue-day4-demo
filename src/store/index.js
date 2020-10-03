import Vue from 'vue'
import Vuex from 'vuex'

// import services from '@/services/index.js'
import services from '../services/index' //发现用这样路径引入，IDE 可以很好地补全代码。用 '@/services/index.js'的方式就不行


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: localStorage.getItem("token") ? true : false
  },
  getters:{
    getIsLogin:state=>{
      return state.isLogin
    }
  },
  mutations: {
    setLogin(state,{isLogin}){
      state.isLogin = isLogin;
    }
  },
  actions: {
    login({commit}, userInfo) {
      // console.log('store->actions->login->收到登陆的 dispatch:', userInfo)
    
      return services.log.in(userInfo)
      .then(ret => {    //then()返回的是一个promise
        console.log("services.log.in success:", ret)
        let {code,token} = ret.data;
        if(code){ 
          commit("setLogin",{isLogin:true});
          localStorage.setItem("token",token)
        }

        return {code} ;
      })
      .catch(err => {   //catch()只不过是then()的封装，因此返回也是 promise
        // console.log("services.log.in fail:", err)
        return Promise.reject(err)
      })
    },
    logout({commit}){
      localStorage.removeItem("token");
      commit("setLogin",{isLogin:false})
    }
  },
  modules: {}
})