<template>
  <div class="home" id="home">
    <!-- 轮播图 -->
    <cube-slide :data="slider" :interval="5000">
      <cube-slide-item v-for="(item,index) in slider" :key="index">
        <router-link :to="`/detail/${item.id}`">
          <img class="slider" :src="item.img">
        </router-link>
      </cube-slide-item>
    </cube-slide>

    <!-- 商品列表 -->
    <div class="good-list-container" :style="getGoodListStyle" >
      <good-list :data="goods" @cartanim="startCartAnim"></good-list>
    </div>

    <!-- <cart-anim ref="ca"></cart-anim> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import { mapState,mapActions,mapGetters } from "vuex";
import GoodList from "@/components/GoodList.vue";
// import CartAnim from "@/components/CartAnim.vue";



export default {
  name: 'Home',
  components: {
    GoodList,
    // CartAnim
  },
  computed: {
    ...mapState('goods',{
      slider:state=>state.slider
    }),
    ...mapGetters('goods',["goods"]),
      getGoodListStyle() {
      let homeHeight = this.$store.state.viewHeight;
      let slideHeight = 210;

      return{
        height: `${homeHeight - slideHeight}px`,
      };
    },
  },
  methods: {
      ...mapActions('goods',["get"]),
      startCartAnim(el) {

        // this.$refs.ca.start(el)
        // const anim = this.$createCartAnim({   // 创建小球动画实例，开始动画
        //   onTransitionend(){
        //     anim.remove();
        //   }
        // });
        // anim.start(el)


      // 方式2
      const anim = this.$create(CartAnim, {
        pos: { left: "45%", bottom: "16px" }
      });
      anim.start(el);
      anim.$on("transitionend", anim.remove);
    },
  
  },
  mounted() { 
    this.get();
  },
}
</script>

<style lang="stylus" scoped>
.cube-slide {
  height: auto;
}

.cube-slide-item > a > img {
  width: 100%;
  height: auto;
}

.good-list-container{
    overflow :scroll
}
</style>