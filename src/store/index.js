import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     episodios: [
          {
              title:"EP-1 ",
              id:1,
              img: "./thumbs/1.jpg",
          },
          {
            title:"EP-2 ",
            id:2,
            img: "./thumbs/2.jpg",
        },{
            title:"EP-3 ",
            id:3,
            img: "./thumbs/3.jpg",
        },{
            title:"EP-4 ",
            id:4,
            img: "./thumbs/4.jpg",
        },{
            title:"EP-5 ",
            id:5,
            img: "./thumbs/5.jpg",
        },{
            title:"EP-6 ",
            id:6,
            img: "./thumbs/6.jpg",
        },{
            title:"EP-7 ",
            id:7,
            img: "./thumbs/7.jpg",
        },{
            title:"EP-8 ",
            id:8,
            img: "./thumbs/8.jpg",
        }
      ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getEpisodes(state) {
      return state.episodios;
    },
  }
})