export default {
  namespaced: true,
  state: {
    showSidebarMobile: false,
  },
  mutations: {
    setSidebarMobile(state, payload) {
      state.showSidebarMobile = payload;
    },
  },
  actions: {
    toggleSidebar({ commit, state }) {
      commit("setSidebarMobile", !state.showSidebarMobile);
    },
  },
};
