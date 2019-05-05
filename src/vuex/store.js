import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
/*1。state在vuex中用于存储数据  */
var state={
    count:1
}
/**mutations 里面放的是方法 
 * 主要用于改变state里面的数据
*/
var mutations = {
    incCount(){
        ++state.count;
    },
    addList(state,data){
        state.list = data;
    }
}
var getters ={
    computedCount(state){
        return state.count*2;
    }
}
/**实例化Vuex.Store */
const store = new Vuex.Store({
    state,
    mutations,
    getters
}) 
export default store;