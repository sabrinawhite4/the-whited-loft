<script setup>
import { RouterLink, RouterView } from "vue-router";
import HeaderView from "@/views/HeaderView.vue";
import HomeView from "@/views/HomeView.vue";
import FooterView from "@/views/FooterView.vue";
</script>

<template>
  <div>
    <HeaderView />
    <RouterView />
    <FooterView />
  </div>
</template>

<style>
@import "@/assets/base.css";

#app {
  margin: 0 auto;
  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
