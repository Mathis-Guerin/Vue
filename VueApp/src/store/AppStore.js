import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  login: '',
  gender: '',
  firstname: '',
  lastname: '',
  email: '',
  city: '',
  phone: '',
  darkMode: false
}

const mutations = {
  ADD_LOGIN: (state, login) => {
    state.login = login
  },

  ADD_GENDER: (state, gender) => {
    state.gender = gender
  },

  ADD_FIRSTNAME: (state, firstname) => {
    state.firstname = firstname
  },

  ADD_LASTNAME: (state, lastname) => {
    state.lastname = lastname
  },

  ADD_EMAIL: (state, email) => {
    state.email = email
  },

  ADD_CITY: (state, city) => {
    state.city = city
  },

  ADD_PHONE: (state, phone) => {
    state.phone = phone
  },

  SET_DARKMODE: (state, darkMode) => {
    state.darkMode = !darkMode
  }
}

const getters = {
  login: (state) => state.login,
  gender: (state) => state.gender,
  firstname: (state) => state.firstname,
  lastname: (state) => state.lastname,
  email: (state) => state.email,
  city: (state) => state.city,
  phone: (state) => state.phone,
  darkMode: (state) => state.darkMode
}

const actions = {
  addLogin: (store, login) => {
    store.commit('ADD_LOGIN', login)
  },
  addGender: (store, gender) => {
    store.commit('ADD_GENDER', gender)
  },
  addFirstname: (store, firstname) => {
    store.commit('ADD_FIRSTNAME', firstname)
  },
  addLastname: (store, lastname) => {
    store.commit('ADD_LASTNAME', lastname)
  },
  addEmail: (store, email) => {
    store.commit('ADD_EMAIL', email)
  },
  addCity: (store, city) => {
    store.commit('ADD_CITY', city)
  },
  addPhone: (store, phone) => {
    store.commit('ADD_PHONE', phone)
  },
  setDarkmode: (store, darkMode) => {
    store.commit('SET_DARKMODE', darkMode)
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
