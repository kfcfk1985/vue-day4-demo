<template>
  <div id="app">
    <router-view />

    <cube-tab-bar v-model="selectLabel" :data="tabs" @change="changeHandler">
    </cube-tab-bar>
  </div>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      selectLabel: "/",
      tabs: [
        {
          label: "Home",
          value: "/",
          icon: "cubeic-home",
        },
        {
          label: "Cart",
          value: "/cart",
          icon: "cubeic-mall",
        },
        {
          label: "Me",
          value: "/about",
          icon: "cubeic-person",
        },
      ],
    };
  },
  methods: {
    changeHandler(val) {
      console.log("你点击了tab,将要去", val);


      this.$router.push({ path: val }).catch((err) => {
        
        // Reflect.ownKeys(err).forEach(key=>{
        //   console.log("key",key)
        // })
        // console.log("key",JSON.stringify(err,null,2))
       

        let regexp = /Redirected when going from/;
        if(regexp.test(err) == true){   //发生重定向引起的报错

        }else{
          alert(`路由跳转发生其他错误:${err.message}`)
        }
      }); 
    },
  },
  computed: {},
};
</script>
<style lang="stylus" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  border: 1px solid red;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.cube-tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #edf0f4;
}
</style>
