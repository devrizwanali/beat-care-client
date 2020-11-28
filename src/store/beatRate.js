import http from '@/config/http';

const state = {
  beatRate: null,
  beatRates: []
};

const mutations = {
  SET_BEAT_RATE(state, data) {
    state.beatRate = data
  },
  SET_BEAT_RATES(state, data) {
    state.beatRates = data
  },
};

const actions = {
  async fetchBeatRates({ commit }) {
    try {
      const beatRates = await http.get('/beat-rates')
      if(beatRates) {
        commit('SET_BEAT_RATES', beatRates.data.beats)
      }
    } catch(error) {
      console.log(error)
    }
  },

  async fetchBeatRate({ commit }, id) {
    const beatRate = await http.get(`/beat-rates/${id}`)
    if(beatRate) {
      commit('SET_BEAT_RATE', beatRate.data.beatRate)
    }
    return beatRate;
  },

  async createBeatRate({ commit, getters }, data) {
    const beatRate = await http.post(`/beat-rates`, data)
    if(beatRate) {
      const beats = getters.beatRates.push(beatRate.data.beatRate)
      commit('SET_BEAT_RATES', beats)
    }
    return beatRate;
  },

  async updateBeatRate({commit}, data) {
    const beatRate = await http.put(`/beat-rates/${data.id}`, data.beatRate)
    return beatRate;
  },

  async deleteBeatRate({ commit, getters }, id) {
    const beatRate = await http.delete(`/beat-rates/${id}`)
    if(beatRate) {
      const beats = getters.beatRates.filter(x => x._id != beatRate.data.beatRate._id)
      commit('SET_BEAT_RATES', beats)
    }
    return beatRate;
  },
};

const getters = {
  beatRate: state => state.beatRate,
  beatRates: state => state.beatRates
};

export default {
  state,
  actions,
  mutations,
  getters
}
