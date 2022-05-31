<template>
  <div id="mainBalance">
    <v-card width="100%" rounded="lg" class="balance-card" elevation="0">
      <v-card-text>
        <v-row align="center">
          <v-col cols="12">
            <p>Balance Total</p>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <div class="balance-card__balance">
              <p>φ 1,102.84 <span> = $ 230.00</span></p>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <div class="balance-card__options">
              <div
                v-for="(opt, index) in options"
                :key="`balance_options-${index}`"
              >
                <img :src="opt.icon" alt="" />
                <span>{{ opt.name }}</span>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          name: "Pagar",
          icon: require("@/assets/icons/pay_icon.svg"),
          path: "/#",
        },
        {
          name: "Convertir",
          icon: require("@/assets/icons/exchange_icon.svg"),
          path: "/#",
        },
        {
          name: "Retirar",
          icon: require("@/assets/icons/withdraw_icon.svg"),
          path: "/#",
        },
        {
          name: "Recargar",
          icon: require("@/assets/icons/deposit_icon.svg"),
          path: "/#",
        },
      ],
    };
  },
};
</script>

<style scoped>
#mainBalance .balance-card {
  margin-bottom: 1em;
}

.balance-card__options {
  display: flex;
  justify-content: space-between;
}

.balance-card__options div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.balance-card__options div img {
  width: 50px;
  height: 50px;
}
</style>
