import * as types from './types.js'
import getters from './getters'

let state = {

}

// console.log(state)

const mutations = {
    [types.INCREMENT](state) {
        state.count++
    }
}


export default {
    state,
    mutations,
    getters
}