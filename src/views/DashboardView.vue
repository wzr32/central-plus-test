<template>
  <div>
    <MainBalance />
    <MainData />
  </div>
</template>

<script>
import MainBalance from "@/modules/dashboard/components/MainBalance.vue";
import MainData from "../modules/dashboard/components/MainData.vue";
export default {
  name: "DashboardView",
  components: {
    MainBalance,
    MainData,
  },
};
</script>

<style>
</style>