export default {
  namespaced: true,
  state: {
    name: 'b模块'
  },
  mutations: {
    chgBName (state, payload) {
      state.name = payload.name
    }
  }
}
