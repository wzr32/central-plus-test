<template>
  <div>
    <v-dialog v-model="this.showEditDialog" persistent max-width="400">
      <v-card>
        <v-card-title class="text-h5">Editar Cuenta</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-row>
            <v-col sm="12">
              <v-text-field
                v-model="alias"
                label="Alias"
                :rules="rules"
                hide-details="auto"
                :value="this.editData.alias"
                outlined
              ></v-text-field>
            </v-col>
            <v-col sm="12">
              <v-text-field
                v-model="address"
                :label="inputData.label"
                :rules="rules"
                :value="this.editData.address"
                hide-details="auto"
                outlined
              ></v-text-field>
            </v-col>
            <v-col sm="5">
              <v-select
                v-model="currency"
                :items="currencies"
                item-text="state"
                item-value="abbr"
                :value="this.editData.currency"
                :label="currencyData.label"
                return-object
                single-line
                outlined
              ></v-select>
            </v-col>
            <v-col sm="7">
              <v-select
                v-model="select"
                :items="items"
                item-text="state"
                item-value="abbr"
                :value="this.editData.bank"
                :label="selectData.label"
                return-object
                single-line
                outlined
              ></v-select>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="handleClose">
            Cancelar
          </v-btn>
          <v-btn color="green darken-1" text @click="submit"> Editar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import banks from "@/shared/dummyData/banks";
import exchanges from "@/shared/dummyData/exchanges";
import currencies from "@/shared/dummyData/currencies";

export default {
  name: "DialogEdit",
  data() {
    return {
      alias: "",
      address: "",
      select: "",
      currency: "",
      currencies: currencies,
      items: [],
      rules: [(value) => !!value || "Required."],
      selectData: {
        label: "",
      },
      currencyData: {
        label: "",
      },
      inputData: {
        label: "",
      },
    };
  },
  methods: {
    ...mapActions("accounts", [
      "closeEditDialog",
      "updateCryptoAccount",
      "updateLocalAccount",
    ]),
    handleClose() {
      this.closeEditDialog();
    },
    submit() {
      if (this.formType === "local") {
        const data = {
          id: String(this.editData.id),
          alias: this.alias,
          currency: this.currency,
          account: this.address,
          bank: this.select,
        };
        this.updateLocalAccount(data);
      } else {
        const data = {
          id: String(this.editData.id),
          alias: this.alias,
          coin: this.currency,
          wallet: this.address,
          exchange: this.select,
        };
        this.updateCryptoAccount(data);
      }
      // this.handleClose();
    },
  },
  computed: {
    ...mapState("accounts", ["showEditDialog", "editData", "formType"]),
  },
  updated() {
    if (this.formType === "local") {
      this.selectData.label = "Banco";
      this.inputData.label = "Cuenta bancaria";
      this.currencyData.label = "Divisa";
      this.items = banks;
    } else {
      this.selectData.label = "Exchange";
      this.inputData.label = "Wallet";
      this.currencyData.label = "Token";
      this.items = exchanges;
    }
  },
};
</script>

<style scoped>
</style>