<template>
  <v-navigation-drawer
    class="sidebar__nav"
    style="background: #5cb88c"
    v-model="this.showSidebarMobile"
    :permanent="$vuetify.breakpoint.mdAndUp"
    :temporary="$vuetify.breakpoint.mdAndDown"
    absolute
    height="-webkit-fill-available"
  >
    <div class="sidebar__nav__logo">
      <img src="@/assets/logo/central_logo.svg" alt="" />
    </div>
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.path"
        class="sidebar__nav__link"
        active-class="sidebar__nav__link--active"
        link
      >
        <v-list-item-icon class="white-color">
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="white-color">{{
            item.title
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <div class="pa-2">
        <v-btn plain block> Cerrar Sesion </v-btn>
      </div>
      <div class="ma-2">
        <v-card>
          <v-card-text class="user-card">
            <div class="user-card__avatar">
              <v-avatar size="36">
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                />
              </v-avatar>
            </div>
            <div class="user-card__data">
              <span>Alicia Ferrara</span>
              <span>hola@alicia.ferrara</span>
            </div>
          </v-card-text>
        </v-card>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: "Home", icon: "mdi-home-variant", path: "/" },
        {
          title: "Metodos de pago",
          icon: "mdi-wallet",
          path: "/user-accounts",
        },
      ],
      right: null,
    };
  },
  methods: {
    ...mapActions("dashboard", ["closeSidebar"]),
    test() {
      console.log(this.isMobile);
    },
  },
  computed: {
    ...mapState("dashboard", ["showSidebarMobile"]),
  },
};
</script>

<style scoped>
.white-color {
  color: #ffffff;
}

.sidebar__close-btn {
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
}

.sidebar__nav {
  background: #5cb88c;
  height: 100%;
}

.sidebar__nav__logo {
  padding: 1em;
  display: grid;
  place-items: center;
}

.sidebar__nav__link--active {
  color: #fff;
}

.user-card {
  display: flex;
  place-items: center;
  padding: 0.4em;
}

.user-card__avatar {
  margin-right: 12px;
}

.user-card__data span {
  display: inline-block;
}

@media screen and (max-width: 960px) {
  .sidebar__nav {
    height: fit-content;
  }
}
</style>