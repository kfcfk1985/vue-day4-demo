<template>
  <div class="home">
    <!-- 轮播图 -->
    <!-- <cube-slide :data="slider" :interval="5000">
      <cube-slide-item v-for="(item,index) in slider" :key="index">
        <router-link :to="`/detail/${item.id}`">
          <img class="slider" :src="item.img">
        </router-link>
      </cube-slide-item>
    </cube-slide> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'



export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  mounted() {
    this.$store.dispatch("goods/get")
  },
}
</script>
