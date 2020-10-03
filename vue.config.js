const apis = require('./src/services/apis.js')

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: false
    }
  },
  configureWebpack: {
    devServer: {
      proxy: {
        "/api": {
          target: "http://localhost:3000",
          changeOrigin: true
        
        }
      }

      // // 模拟后台服务器 express写法
      // before(app) {
      //   // 模拟后台服务器express
      //   app.get(apis.LOG.IN, function(req, res) {
      //     const { username, passwd } = req.query;
      //     console.log("用户登陆，发送过来的信息:",username, passwd);

      //     if (username == "kaikeba" && passwd == "123") {
      //       res.json({ code: 1, token: "jilei" });
      //     } else {
      //       res.status(401).json({ code: 0, message: "用户名或者密码错误" });
      //     }
      //   });

      //   // 保护接口中间件
      //   function auth(req, res, next) {
      //     if (req.headers.token) {
      //       // 已认证
      //       next()
      //     } else {
      //       // 用户未授权
      //       res.sendStatus(401)
      //     }
      //   }

      //   // 获取登录用户信息
      //   app.get(apis.USER.GET_INFO, auth, function(req, res) {
      //     res.json({ code: 1, data: { name: "tom", age: 20 } });
      //   });
      // }
    }
  }
}