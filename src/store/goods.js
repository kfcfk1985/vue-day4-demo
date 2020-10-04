


// import services from '@/services/index.js'
import services from '../services/index' //发现用这样路径引入，IDE 可以很好地补全代码。用 '@/services/index.js'的方式就不行



export default {
    namespaced: true,
    state:{
        slider: [],
        keys: [],
        goodsInfo: {}
    },
    getters: { // 添加一个goods属性，转换对象形式为数组形式便于循环渲染
        goods: state => {
          return state.keys
            .map(key => state.goodsInfo[key])
            .reduce((prev, next) => prev.concat(next), []);
        }
    },
    mutations:{
        setDate(state,{slider,keys,goodsInfo}){
            state.slider = slider;
            state.keys = keys;
            state.goodsInfo = goodsInfo;
        }
    },
    actions:{                                
        async get({commit}){
           let ret =  await services.goods.get();      
           if(ret != null){
                commit("setDate",ret)
            }      
        }
    }
}
