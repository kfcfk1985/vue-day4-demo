import axios from 'axios'

import log from './log.js'
import user from './user'
import goods from './goods'

function init(vm) {
    // 添加请求拦截器
    axios.interceptors.request.use(function (config) {
        // 在发送请求之前做些什么
        let token = localStorage.getItem("token")
        if (token) {
            config.headers.Authorization = "Bearer "+ token;
        } 

        return config;
    }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    });

    // 响应拦截器
    // 参数1表示成功响应的回调函数，这里设置为null，就是说明成功的响应不用任何处理
    // 这里只关心失败响应
    axios.interceptors.response.use(null, function (error) {
        //返回的 error 对象中带有 response，这个很难看出来啊
        if(error.response.status == 401){
            vm.$store.dispatch("login/logout")
            // console.log('vm.$router.currentRoute',vm.$router.currentRoute)
            if(vm.$router.currentRoute.name != 'Login'){    //当前页面不为 Login才跳转
                vm.$router.push({
                    name:'Login',
                    query:{redirect:vm.$router.currentRoute.path}      //带上本来页面的地址
                })
            }
           
        }

        // 对响应错误做点什么
        return Promise.reject(error);
    });

}

export default {
    init,

    log,
    user,
    goods
}