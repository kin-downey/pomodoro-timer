import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      timer_color: 'primary',
    },
    mutations: {
      set_timer_color(state, color) {
        state.timer_color = color
      },
    },
    actions: {
      set_timer_color(context, color) {
        console.log('this is from actions set_timer')
        context.commit('set_timer_color', color)
      },
    },
    getters: {},
  })
}

export default createStore
