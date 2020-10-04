// import apis from './apis.js'
import axios from 'axios'
const apis = require('./apis.js')

export default {
    
    //Seivices中的模块是负责网络请求的，基本的数据处理也可以放在这里,如提取整合数据。
    async get() {
        let ret = await axios.get(apis.GOODS.GET)
        console.log('apis.GOODS.GET return is :', ret)

        if (ret.data.code == 1) { //成功
            let {slider,keys,data: goodsInfo } = ret.data

            return {slider,keys, goodsInfo}
        } else {
            return null
        }
    },
}