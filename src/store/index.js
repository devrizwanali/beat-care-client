import Vue from 'vue';
import Vuex from 'vuex';
import User from './user';
import BeatRate from './beatRate'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    User,
    BeatRate
  }
});
