import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Cart from '../views/Cart.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      console.log("this is: before Enter")

      next();
    }
  },
  {
    path: '/about',
    name: 'About',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      requiresAuth: true //控制是否需要登录信息
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log("\n\rthis is: before Each")
  let token;
  if (to.meta && to.meta.requiresAuth == true) { // 需要登录
    token = localStorage.getItem("token");
    if (!token) {
      console.log("没有登陆，重定向到login")


      next({
        name: 'Login', //没有登陆，重定向到login页面
        query: {
          redirect: to.path
        } //带上本来要跳转的参数       
      })

    } else {
      next();
    }
  }
  next();
})
router.beforeResolve((to, from, next) => {
  console.log("this is: before Resolve")

  next();
})

router.afterEach((to, from) => {
  console.log("this is: after Each")
})

export default router