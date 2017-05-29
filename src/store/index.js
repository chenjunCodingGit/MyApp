import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import mutations from './mutations' //管理数据
import actions from './actions' //管理事件

export default new Vuex.Store({
    modules: {
        mutations
    },
    actions
})