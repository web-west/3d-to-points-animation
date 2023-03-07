const SET_PAGE = 'SET_PAGE'

export const state = () => ({
  page: null,
});

export const getters = {
  getPage: state => state.page,
};

export const actions = {
  async setPage({ commit }, payload) {
      await commit('SET_PAGE', payload)
  },
}

export const mutations = {
  [SET_PAGE](state, payload) {
    state.page = payload
  },
}
