import http from '@/config/http';

const state = {
  token: null,
  user: null,
};

const mutations = {
  REGISTER_USER(state, data) {
    state.user = data.user
    state.token = data.token
  },
  LOGIN_USER(state, data) {
    state.user = data.user
    state.token = data.token
  },
  LOGOUT_USER(state) {
    state.user = null
    state.token = ''
  }
};

const actions = {
  register({ commit }, user) {
    const promise = http.post('/register', user).then(res => {
      localStorage.setItem('token', res.data.token);
      commit('REGISTER_USER', res);
    })
    return promise
  },

  login({ commit }, user) {
    const promise = http.post('/login', user).then(res => {
      localStorage.setItem('token', res.data.token);
      commit('LOGIN_USER', res.data);
    })
    return promise;
  },

  LogOut({ commit }) {
    localStorage.removeItem('token')
    commit('LOGOUT_USER')
  },
};

const getters = {
  user: state => state.user,
  isLoggedIn: state => state.token || localStorage.getItem('token')
};

export default {
  state,
  actions,
  mutations,
  getters
}
