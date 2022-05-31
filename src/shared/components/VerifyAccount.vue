<template>
  <v-card class="verify-card" elevation="0" rounded="lg">
    <v-card-text class="verify-card__body">
      <h3>Bienvenido, Jose</h3>
      <p>
        Completa tu verificacion de perfil para disfrutar de todas las funciones
        de Central +
      </p>
      <v-btn rounded>Verificar Perfil</v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {};
</script>

<style scoped>
.verify-card {
  background: #5cb88c;
  background-image: url("@/assets/bg/central_bg_layer.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-position-y: -1em;
  background-size: 75%;
  text-align: center;
  margin-bottom: 1em;
}

.verify-card__body {
  color: #fff !important;
}
</style>