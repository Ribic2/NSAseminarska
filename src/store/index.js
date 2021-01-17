import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    deleteDialogToggle: false,
    patientAddedToggle: false
  },
  mutations: {
    CHANGE_DELETE_DIALOG(state){
      state.deleteDialogToggle = !state.deleteDialogToggle
    },
    CHANGE_ADD_DIALOG(state){
      state.patientAddedToggle = !state.patientAddedToggle
    }
  },
  actions: {

  },
  modules: {

  }
})
