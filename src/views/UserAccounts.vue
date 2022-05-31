<template>
  <div>
    <v-card>
      <v-card-text>
        <h3>Cuentas</h3>
        <LocalAccountsList />
        <CryptoAccountsList />
      </v-card-text>
    </v-card>
    <DialogAccounts />
    <DialogEdit />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import LocalAccountsList from "@/modules/userAccounts/componets/LocalAccountsList.vue";
import CryptoAccountsList from "@/modules/userAccounts/componets/CryptoAccountsList.vue";
import DialogAccounts from "@/modules/userAccounts/componets/DialogAccounts.vue";
import DialogEdit from "@/modules/userAccounts/componets/DialogEdit.vue";

export default {
  name: "UserAccountsView",
  components: {
    LocalAccountsList,
    CryptoAccountsList,
    DialogAccounts,
    DialogEdit,
  },
  data() {
    return {
      showDialog: false,
      formType: null,
      local: "local",
    };
  },
  methods: {
    ...mapActions("accounts", ["getLocalAccounts", "getCryptoAccounts"]),
  },
  mounted() {
    this.getLocalAccounts();
    this.getCryptoAccounts();
  },
};
</script>

<style scoped>
</style>