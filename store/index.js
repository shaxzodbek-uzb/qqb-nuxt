export const state = () => ({
  last_update: 0,
})

export const mutations = {
  set_last_update(state, last_update) {
    state.last_update = last_update
  },
}
