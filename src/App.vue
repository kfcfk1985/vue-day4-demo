<template>
  <div id="app">
    <transition name="page-switch">
      <router-view class="view-container" :style="viewStyle"></router-view>
    </transition>

    <cube-tab-bar
      ref="tabBar"
      v-model="selectLabel"
      :data="tabs"
      @change="changeHandler"
    >
    </cube-tab-bar>
  </div>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      viewStyle:null,
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
      // console.log("你点击了tab,将要去", val);

      this.$router.push({ path: val }).catch((err) => {
        // Reflect.ownKeys(err).forEach(key=>{
        //   console.log("key",key)
        // })
        // console.log("key",JSON.stringify(err,null,2))

        let regexp = /Redirected when going from/;
        if (regexp.test(err) == true) {	//发生重定向引起的报错
          
        } else {
          alert(`路由跳转发生其他错误:${err.message}`);
        }
      });
    },
    getViewStyle() {
      let tapBarHeight = tapBarHeight = this.$refs.tabBar.$el.offsetHeight;
      return{
        bottom: `${tapBarHeight}px`,
      };
    },
  },
  computed: {
    
  },

  mounted() {
    this.viewStyle = this.getViewStyle();
  },
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

.cube-tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #edf0f4;
}

// **********  页面切换动效 start  **********
.page-switch-enter {
  transform: translateX(-100%);
  opacity: 0;
}

.page-switch-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.page-switch-enter-active, .page-switch-leave-active {
  transition: all 0.5s ease-in-out;
}

// ********** 页面切换动效 end **********

// ********** 解决增加页面切换动效后，页面上下摆动，出现水平，垂直滚动条的bug
.view-container {
  // border: 1px solid green;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
}
</style>
