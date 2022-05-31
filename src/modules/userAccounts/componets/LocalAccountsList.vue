<template>
  <div>
    <div class="title__div">
      <h3>Cuenta en Divisas</h3>
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            small
            rounded
            fab
            elevation="0"
            height="35"
            width="35"
            v-bind="attrs"
            v-on="on"
            @click="openAddDialog"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <span>Agregar Cuenta</span>
      </v-tooltip>
    </div>
    <div v-if="localAccounts.length">
      <v-list>
        <v-list-item
          v-for="(accnt, i) in localAccounts"
          :key="`local_account-${i}`"
        >
          <v-list-item-content>
            <v-list-item-title>{{ accnt.alias }}</v-list-item-title>
            <v-list-item-subtitle>{{ accnt.bank }}</v-list-item-subtitle>
            <v-list-item-subtitle>{{ accnt.account }}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <div class="action-wrapper">
              <v-btn icon>
                <v-icon color="primary" @click="handleOpenEditDialog(accnt)"
                  >mdi-pencil</v-icon
                >
              </v-btn>
              <v-btn icon>
                <v-icon color="red" @click="deleteLocalAccount(accnt.id)"
                  >mdi-delete</v-icon
                >
              </v-btn>
            </div>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </div>
    <div v-else>
      <p>there is no data</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "LocalAccountsList",
  data() {
    return {};
  },
  methods: {
    ...mapActions("accounts", [
      "openDialog",
      "openEditDialog",
      "formTypeLocal",
      "deleteLocalAccount",
    ]),
    openAddDialog() {
      this.formTypeLocal();
      this.openDialog();
    },
    handleOpenEditDialog(account) {
      const data = {
        id: account.id,
        alias: account.alias,
        currency: account.currency,
        account: account.account,
        bank: account.bank,
      };
      this.formTypeLocal();
      this.openEditDialog(data);
    },
  },
  computed: {
    ...mapState("accounts", ["localAccounts"]),
  },
};
</script>

<style scoped>
.title__div {
  display: flex;
  align-items: center;
  gap: 1em;
}
</style>