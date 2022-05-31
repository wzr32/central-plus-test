<template>
  <div>
    <div class="title__div">
      <h3>Cuentas Cripto</h3>
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
        <span>Agregar Cuenta Cripto</span>
      </v-tooltip>
    </div>

    <div v-if="cryptoAccounts.length">
      <v-list>
        <v-list-item
          v-for="(crypto, i) in cryptoAccounts"
          :key="`crypto_account-${i}`"
        >
          <v-list-item-content>
            <v-list-item-title>{{ crypto.alias }}</v-list-item-title>
            <v-list-item-subtitle>{{ crypto.coin }}</v-list-item-subtitle>
            <v-list-item-subtitle>{{ crypto.wallet }}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <div class="action-wrapper">
              <v-btn icon>
                <v-icon color="primary">mdi-pencil</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon color="red">mdi-delete</v-icon>
              </v-btn>
            </div>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </div>
    <div v-else>
      <p>there is not data to show</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "CryptoAccountsList",
  props: ["onOpen"],
  methods: {
    ...mapActions("accounts", ["openDialog", "formTypeCrypto"]),
    openAddDialog() {
      this.formTypeCrypto();
      this.openDialog();
    },
  },
  computed: {
    ...mapState("accounts", ["cryptoAccounts"]),
  },
};
</script>

<style scoped>
.title__div {
  display: flex;
  align-items: center;
  gap: 1em;
}
.action-wrapper {
  display: flex;
}
</style>