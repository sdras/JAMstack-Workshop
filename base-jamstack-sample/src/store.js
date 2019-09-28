import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apidata: null
  },
  mutations: {
    updateAPIdata: (state, payload) => {
      state.apidata = payload
    }
  },
  actions: {
    async getAPI({ state, commit }) {
      if (state.apidata.length) return

      try {
        let apidata = await fetch(`urlendpoint`).then(res => res.json())

        commit("updateAPIdata", apidata)
      } catch (err) {
        console.log(err)
      }
    }
  }
})
