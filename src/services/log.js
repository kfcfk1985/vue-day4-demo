// import apis from './apis.js'
import axios from 'axios'

const apis = require('./apis.js')

export default {
    in({username,passwd}){
        return axios.get(
            apis.LOG.IN,
            {params:{username,passwd}}    // `params` 是即将与请求一起发送的 URL 参数        
        )
    },
}

