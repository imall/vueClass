import { createStore } from 'vuex'

import st from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default createStore({
  st,
  mutations,
  actions,
  getters
})
