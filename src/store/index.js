import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    players: []
  },
  actions: {
    getPlayers() {

    }
  },
  mutations: {
    SET_PLAYERS(state, players) {
      
    }
  },
  modules: {}
});
