import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      animeName: "Weathering With You",
      episodios: null
  },
  mutations: {
    SET_EPISODES(state,payload){
      state.episodios = payload;
    }
  },
  actions: {
    fetchEpisodes() {
      fetch('./data/epList.json')
        .then((res) => {   
          return res.json();
        })
        .then((data) => {
          const payload = data.episodes;
          this.commit('SET_EPISODES',payload);
        })
    }
  },
  modules: {
  },
  getters: {
    getEpisodes(state) {
      return state.episodios;
    },
    getAnimeName(state) {
      return state.animeName;
    }
  }
})