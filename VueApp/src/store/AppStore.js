import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  name: ''
}

const mutations = {
  ADD_NAME: (state, name) => {
    state.name = name
  }
}

const getters = {
  name: (state) => state.name
}

const actions = {
  addName: (store, name) => {
    store.commit('ADD_NAME', name)
  }
}

let store = new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters,
  strict: true
})

global.store = store
export default store
