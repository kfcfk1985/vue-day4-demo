<template>
  <div id="app">
    <div id="nav">
      <div>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>

      <div>
        <button @click="checkUserInfo" >检测登陆状态</button>

        <button @click="logOut" v-if="getIsLogin">登出</button>
      </div>
    </div>

    <router-view />
  </div>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  methods: {
    checkUserInfo() {
      this.$services.user.getInfo();
    },
    logOut() {
      this.$store.dispatch("logout")
    },
  },
  computed: {
    ...mapGetters(["getIsLogin"]),
  },
};
</script>
<style>
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
</style>
