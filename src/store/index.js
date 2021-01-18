import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    deleteDialogToggle: false,
    patientAddedToggle: false,
    addVisitToggle: false,
    successAddVisit: false,
    visits: []
  },
  mutations: {
    CHANGE_DELETE_DIALOG(state){
      state.deleteDialogToggle = !state.deleteDialogToggle
    },
    CHANGE_ADD_DIALOG(state){
      state.patientAddedToggle = !state.patientAddedToggle
    },
    ADD_VISIT(state, data){
      state.visits.push(data)
    }
  },
  actions: {
    addVisit({commit}, data){
      commit('ADD_VISIT', data)
    }
  },
  modules: {

  }
})
