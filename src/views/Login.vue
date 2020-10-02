
//ok
<template>
  <div>
    <div class="logo">
      <img src="https://img.kaikeba.com/logo-new.png" alt />
    </div>

    <!-- <cube-button>登录</cube-button> -->
    <cube-form
      :model="model"
      :schema="schema"
      @submit="handleLogin"
      @validate="haneldValidate"
    >
    </cube-form>
  </div>
</template>

<script>
//ok
export default {
  data() {
    return {
      model: {
        username: "",
        passwd: "",
      },
      schema: {
        // 表单结构定义
        fields: [
          // 字段数组
          {
            type: "input",
            modelKey: "username",
            label: "用户名",
            props: {
              placeholder: "请输入用户名",
            },
            rules: {
              // 校验规则
              required: true,
            },
            trigger: "blur",
          },
          {
            type: "input",
            modelKey: "passwd",
            label: "密码",
            props: {
              type: "password",
              placeholder: "请输入密码",
              eye: {
                open: true,
              },
            },
            rules: {
              required: true,
            },
            trigger: "blur",
          },
          {
            type: "submit",
            label: "登录",
          },
        ],
      },
    };
  },
  methods: {
    handleLogin(e) {
      console.log("handleLogin", e);

      e.preventDefault();    // 阻止表单默认提交行为（跳转或刷新）,why？答：详见：https://blog.csdn.net/fairyier/article/details/80048341


      this.$store.dispatch("login",this.model)
      
    },
    haneldValidate(ret) {
      console.log("haneldValidate", ret);
    },
  },
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建

    console.log("this is: before Route Enter");

    next();
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`

    console.log("this is: before Route Update");

    next();
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`

    console.log("this is: before Route Leave");

    next();
  },
};
</script>

<style scoped>
</style>