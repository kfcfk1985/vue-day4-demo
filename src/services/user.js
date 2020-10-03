// import apis from './apis.js'
import axios from 'axios'

const apis = require('./apis.js')

export default {
    getInfo(){
        return axios.get(apis.USER.GET_INFO)
    },
}

