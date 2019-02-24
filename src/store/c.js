export default {
  state: {
    name: 'c模块'
  },
  mutations: {
    updateName (state, payload) {
      state.name = payload.name
    }
  }
}
