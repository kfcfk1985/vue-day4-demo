<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button v-if="isLogin" @click="logOut">登出</button>
  </div>
</template>


<script>

import {mapState} from 'vuex'


export default {
  computed: {
    ...mapState({
      isLogin:state=>state.login.isLogin
    })
  },
  methods: {
    logOut(){
      this.$store.dispatch("login/logout")
      this.$router.replace({name:"Login"})
    }
  },
}
</script>

<style>

</style>