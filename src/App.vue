<template>
  <v-app id="app">
    <v-main class="main">
      <div v-if="$vuetify.breakpoint.mdAndDown">
        <Sidebar />
      </div>
      <v-container fluid class="container">
        <div v-if="$vuetify.breakpoint.mdAndDown">
          <v-btn
            @click="toggleSidebar"
            class="burger-icon-btn"
            rounded
            fab
            small
          >
            <v-icon class="burger-icon"> mdi-menu </v-icon>
          </v-btn>
        </div>
        <v-row class="container__row">
          <v-col cols="2" md="2" :hidden="$vuetify.breakpoint.mdAndDown">
            <v-card rounded="lg" elevation="0" class="sidebar">
              <Sidebar />
            </v-card>
          </v-col>
          <v-col sm="12" md="6">
            <router-view />
          </v-col>
          <v-col sm="12" md="4">
            <VerifyAccount />
            <LastTransactionsView />
          </v-col>
          <!-- <SpeedDial /> -->
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import Sidebar from "./shared/components/Sidebar.vue";
import VerifyAccount from "./shared/components/VerifyAccount.vue";
import LastTransactionsView from "./views/LastTransactionsView.vue";
// import SpeedDial from "./shared/components/SpeedDial.vue";

export default {
  name: "App",
  components: {
    Sidebar,
    VerifyAccount,
    LastTransactionsView,
    // SpeedDial,
  },
  data: () => ({
    //
  }),
  methods: {
    ...mapActions("dashboard", ["openSidebar", "toggleSidebar"]),
  },
};
</script>

<style scoped>
#app .main {
  background: #fafafa;
}

.container {
  height: 100%;
  position: relative;
}

.container .burger-icon-btn {
  position: fixed;
  top: 1em;
  left: 1em;
  z-index: 100;
}

.container__row {
  height: inherit;
}

.sidebar {
  background: #5cb88c;
  height: 100%;
  position: relative;
}
</style>