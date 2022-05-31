<template>
  <div>
    <h3>Activos</h3>
    <div>
      <v-list>
        <v-subheader>{{ localCoins.title }}</v-subheader>
        <v-list-item
          v-for="(currency, i) in localCoins.currencies"
          :key="`local_currencies_list-${i}`"
        >
          <v-list-item-avatar>
            <v-img :src="currency.icon"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ currency.currency }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-content class="list-item-right">
            <v-list-item-title>{{ currency.amount }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list>
        <v-subheader>{{ cryptos.title }}</v-subheader>
        <v-list-item
          v-for="(crypto, i) in cryptos.coins"
          :key="`crypto_coins_list-${i}`"
        >
          <v-list-item-avatar>
            <v-img :src="crypto.icon"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ crypto.crypto }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-content class="list-item-right">
            <v-list-item-title>{{ crypto.amount }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>

<script>
export default {
  name: "Actives",
  data() {
    return {
      localCoins: {
        title: "Monedas Nacionales",
        currencies: [
          {
            currency: "US Dollar",
            amount: "$ 983.00",
            icon: require("@/assets/icons/us_icon.svg"),
          },
          {
            currency: "EURO",
            amount: "€ 2478.00",
            icon: require("@/assets/icons/eu_icon.svg"),
          },
          {
            currency: "Bolivar Digital",
            amount: "VES 300",
            icon: require("@/assets/icons/vzla_icon.svg"),
          },
        ],
      },
      cryptos: {
        title: "CriptoMonedas",
        coins: [
          {
            crypto: "Tether",
            amount: "USDT 20",
            icon: require("@/assets/icons/tether_icon.svg"),
          },
          {
            crypto: "PEL +",
            amount: "PEL 2",
            icon: require("@/assets/icons/central_icon.svg"),
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.list-item-right {
  text-align: right;
}
</style>