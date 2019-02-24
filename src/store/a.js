export default {
  namespaced: true,
  state: {
    name: 'a模块'
  },
  mutations: {
    chgAName (state, payload) {
      state.name = payload.name
    }
  }
}
