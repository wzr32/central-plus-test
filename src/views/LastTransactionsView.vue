<template>
  <v-card elevation="0" rounded="lg">
    <v-card-text>
      <div>
        <h3>Transacctiones recientes</h3>
      </div>
      <div>
        <v-list two-line>
          <v-list-item
            v-for="(trxn, i) in transactions"
            :key="`trxn_item-${i}`"
          >
            <v-badge
              bordered
              bottom
              color="green accent-4"
              offset-x="15"
              offset-y="5"
              avatar
              dot
            >
              <!-- <v-list-item-avatar> -->
              <div class="trxn-icon__wrapper">
                <v-img class="trxn-icon" :src="trxn.icon"></v-img>
              </div>
              <!-- </v-list-item-avatar> -->
            </v-badge>
            <v-list-item-content>
              <v-list-item-title>{{ trxn.description }}</v-list-item-title>
              <v-list-item-subtitle>{{ trxn.wallet }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-content class="list-items-right">
              <v-list-item-title>{{ trxn.amount }}</v-list-item-title>
              <v-list-item-subtitle>{{ trxn.date }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "LastTransactionsView",
  data() {
    return {
      transactions: [
        {
          description: "Pago a Jose Vivas",
          wallet: "8ade22fd-f6b6-41df-a0ae-432a6a5b3bc8",
          amount: "$ 20.00",
          date: "20-02- 5:06pm",
          icon: require("@/assets/vectors/withdraw_vector.svg"),
          action: "payment",
        },
        {
          description: "Recibido de Daniela",
          wallet: "8ade22fd-f6b6-41df-a0ae-432a6a5b3bc8",
          amount: "$ 32.00",
          date: "20-02- 5:06pm",
          icon: require("@/assets/vectors/withdraw_vector.svg"),
          action: "received",
        },
        {
          description: "Conversion a Euros",
          wallet: "8ade22fd-f6b6-41df-a0ae-432a6a5b3bc8",
          amount: "€ 200.00",
          date: "20-02- 5:06pm",
          icon: require("@/assets/vectors/withdraw_vector.svg"),
          action: "exchange",
        },
        {
          description: "Retiro",
          wallet: "8ade22fd-f6b6-41df-a0ae-432a6a5b3bc8",
          amount: "€ 100.00",
          date: "20-02- 5:06pm",
          icon: require("@/assets/vectors/withdraw_vector.svg"),
          action: "withdraw",
        },
        {
          description: "Recarga",
          wallet: "8ade22fd-f6b6-41df-a0ae-432a6a5b3bc8",
          amount: "€ 847.00",
          date: "20-02- 5:06pm",
          icon: require("@/assets/vectors/withdraw_vector.svg"),
          action: "deposit",
        },
        {
          description: "Retiro en efectivo",
          wallet: "8ade22fd-f6b6-41df-a0ae-432a6a5b3bc8",
          amount: "€ 100.00",
          date: "20-02- 5:06pm",
          icon: require("@/assets/vectors/withdraw_vector.svg"),
          action: "cashout",
        },
        {
          description: "Pago a Makao",
          wallet: "8ade22fd-f6b6-41df-a0ae-432a6a5b3bc8",
          amount: "Bs 12.37",
          date: "20-02- 5:06pm",
          icon: require("@/assets/vectors/withdraw_vector.svg"),
          action: "payment",
        },
        {
          description: "Retiro",
          wallet: "8ade22fd-f6b6-41df-a0ae-432a6a5b3bc8",
          amount: "€ 100.00",
          date: "20-02- 5:06pm",
          icon: require("@/assets/vectors/withdraw_vector.svg"),
          action: "withdraw",
        },
      ],
    };
  },
};
</script>

<style scope>
.trxn-icon__wrapper {
  border-radius: 50%;
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  margin: 0 1em;
  background: #fafafa;
}

.trxn-icon {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.list-items-right {
  text-align: right;
}
</style>