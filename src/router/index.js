import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Cart from '../views/Cart.vue'
import routerHistory from '@/utils/history'
import store from '@/store/index'

Vue.use(routerHistory)    //初始化

Vue.use(VueRouter)
VueRouter.prototype.goBack = function() {   // 扩展Router，添加goBack方法
  this.isGoBack = true;
  this.back();
}

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title:'主页'
    },
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart,
    meta: {
      title:'购物车'
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title:'登陆'
    },
    beforeEnter: (to, from, next) => {
      // console.log("this is: before Enter")

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
      title:'我',
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
  // console.log("this is: before Resolve")

  next();
})

router.afterEach((to, from) => {
  // console.log("this is: after Each")


  if(router.isGoBack == true){                //后退按钮的触发
    router.isGoBack = false;
    
    let path = routerHistory.pop()            // Vue.prototype.$routerHistory.pop() 也行
    if(path == '/login'){                     //若需要返回的是登陆页面
      path = '/about'                         //则改为 about 页面（登陆页面是进入about页面时被重定向的）
    }
    store.dispatch("setTabSelect",{path})
  }else{                                      //tabBar 点击的触发
    routerHistory.push(to.path)               // Vue.prototype.$routerHistory.push(to.path) 也行
  }
})

export default router