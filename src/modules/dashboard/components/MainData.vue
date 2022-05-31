<template>
  <v-card elevation="0" rounded="lg">
    <v-card-text>
      <Statistics />
      <Actives />
    </v-card-text>
  </v-card>
</template>

<script>
import Statistics from "./Statistics.vue";
import Actives from "./Actives.vue";
export default { components: { Statistics, Actives } };
</script>

<style>
</style>