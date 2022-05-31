import { setLocalStorage } from "@/helpers";

export default {
  namespaced: true,
  state: {
    cryptoAccounts: [
      {
        id: 1,
        alias: "binance usdt",
        coin: "USDT",
        wallet: "8ade22fd-f6b6-41df-a0ae-432a6a5b3bc8",
        exchange: "Binance",
      },
    ],
    localAccounts: [
      {
        id: 1,
        alias: "Banco vzla",
        currency: "VES",
        account: "8ade22fd-f6b6-41df-a0ae-432a6a5b3bc8",
        bank: "Banco de Venezuela",
      },
      {
        id: 2,
        alias: "provincial pm",
        currency: "VES",
        account: "8ade22fd-f6b6-41df-a0ae-432a6a5b3bc8",
        bank: "BBVA",
      },
    ],
    loading: false,
    saving: false,
    error: null,
    showDialog: false,
    formType: null,
    showEditDialog: false,
    editData: {
      id: null,
      alias: "",
      currency: "",
      account: "",
      bank: "",
    },
  },
  mutations: {
    setCrytoAccounts(state, payload) {
      state.cryptoAccounts = payload;
    },
    setLocalAccounts(state, payload) {
      state.localAccounts = payload;
    },
    setLoading(state, payload) {
      state.loading = payload ? true : false;
    },
    setSaving(state, payload) {
      state.saving = payload ? true : false;
    },
    setError(state, payload) {
      state.error = payload;
    },
    setShowDialog(state, payload) {
      state.showDialog = payload;
    },
    setFormType(state, payload) {
      state.formType = payload;
    },
    setShowEditDialog(state, payload) {
      state.showEditDialog = payload;
    },
    setEditData(state, payload) {
      state.editData = payload;
    },
  },
  actions: {
    // LOCAL ACCOUNTS ACTIONS
    getLocalAccounts({ commit, state }) {
      commit("setLoading", true);
      commit("setError", null);

      try {
        if (!localStorage.getItem("localAccounts")) {
          localStorage.setItem(
            "localAccounts",
            JSON.stringify(state.localAccounts)
          );
        } else {
          commit(
            "setLocalAccounts",
            JSON.parse(localStorage.getItem("localAccounts"))
          );
        }
      } catch (err) {
        commit("setError", "Error getting local accounts");
      } finally {
        commit("setLoading", false);
      }
    },
    createLocalAccount({ commit, state }, data) {
      commit("setLoading", true);

      const auxArray = [...state.localAccounts];
      auxArray.push(data);

      localStorage.setItem("localAccounts", JSON.stringify(auxArray));

      commit("setLocalAccounts", auxArray);
      commit("setLoading", false);
    },
    async updateLocalAccount({ commit, state }, data) {
      commit("setLoading", true);
      const auxArray = [...state.localAccounts];
      const elemIndex = auxArray.find((elem) => elem.id === Number(data.id));

      auxArray.splice(elemIndex, 1, data);

      setLocalStorage("localAccounts", auxArray);
      commit("setLocalAccounts", auxArray);
      commit("setLoading", false);
    },
    async deleteLocalAccount({ commit, state }, id) {
      commit("seteLoading", true);
      const newArray = state.localAccounts.filter((elem) => elem.id !== id);

      setLocalStorage("localAccounts", newArray);

      commit("setLocalAccounts", newArray);
      commit("setLoading", false);
    },
    // CRYPTO ACCOUNTS ACTIONS
    async getCryptoAccounts({ commit, state }) {
      commit("setLoading", true);
      commit("setError", null);

      try {
        if (!localStorage.getItem("cryptoAccounts")) {
          localStorage.setItem(
            "cryptoAccounts",
            JSON.stringify(state.cryptoAccounts)
          );
        } else {
          commit(
            "setCrytoAccounts",
            JSON.parse(localStorage.getItem("cryptoAccounts"))
          );
        }
      } catch (err) {
        commit("setError", "Error getting crypto accounts");
      } finally {
        commit("setLoading", false);
      }
    },
    async createCryptoAccount({ commit, state }, data) {
      commit("setLoading", true);

      const auxArray = [...state.cryptoAccounts];
      auxArray.push(data);

      localStorage.setItem("crytoAccounts", JSON.stringify(auxArray));

      commit("setCryptoAccounts", auxArray);
      commit("setLoading", false);
    },
    async updateCryptoAccount({ commit, state }, data) {
      commit("setLoading", true);
      const auxArray = [...state.cryptoAccounts];
      const elemIndex = auxArray.find((elem) => elem.id === Number(data.id));

      auxArray.splice(elemIndex, 1, data);

      setLocalStorage("cryptoAccounts", auxArray);
      commit("setCryptoAccounts", auxArray);
      commit("setLoading", false);
    },
    async deleteCryptoAccount({ commit, state }, id) {
      commit("seteLoading", true);
      const newArray = state.cryptoAccounts.filter((elem) => elem.id !== id);

      setLocalStorage("crytoAccounts", newArray);

      commit("setCryptoAccounts", newArray);
      commit("setLoading", false);
    },
    // DIALOGS ACTIONS
    openDialog({ commit }) {
      commit("setShowDialog", true);
    },
    closeDialog({ commit }) {
      commit("setShowDialog", false);
    },
    formTypeLocal({ commit }) {
      commit("setFormType", "local");
    },
    formTypeCrypto({ commit }) {
      commit("setFormType", "crypto");
    },
    openEditDialog({ commit }, data) {
      commit("setShowEditDialog", true);
      commit("setEditData", {
        id: data.id,
        alias: data.alias,
        account: data.account,
        currency: data.currency,
        bank: data.bank,
      });
    },
    closeEditDialog({ commit }) {
      const initialData = {
        id: null,
        alias: "",
        currency: "",
        account: "",
        bank: "",
      };

      commit("setEditData", initialData);
      commit("setShowEditDialog", false);
    },
  },
};
