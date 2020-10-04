// import apis from './apis.js'
import axios from 'axios'

const apis = require('./apis.js')

export default {
    get(){
        return axios.get(apis.GOODS.GET)
    },
}

