import dashboard from "@/modules/dashboard/store/dashboard";
import userAccounts from "@/modules/userAccounts/store/userAccounts";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    accounts: userAccounts,
    dashboard: dashboard,
  },
});
