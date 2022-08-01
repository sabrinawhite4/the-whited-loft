<script setup>
const menuItems = [
  { name: "Home", path: "/" },
  { name: "Rooms", path: "/rooms" },
  { name: "Pricing", path: "/pricing" },
  { name: "Gallery", path: "/gallery" },
  { name: "Vendors", path: "/vendors" },
  { name: "Contact", path: "/contact" },
  { name: "1-000-000-0000", path: "#" },
];
</script>
<template>
  <div
    class="header flex flex-row text-black text-xl mb-10 sticky top-0 z-50 bg-[#F79489]"
  >
    <h3 class="name">The White Loft</h3>
    <router-link
      v-for="item in menuItems"
      :key="item.name"
      :to="item.path"
      class="hover:text-white font-vilane"
      :class="{ 'text-white underline': item.path === $route.path }"
      >{{ item.name }}</router-link
    >
  </div>
</template>

<style>
.name {
  font-size: 4rem;
  font-weight: 240;
  color: black;
  font-family: "Brush Script MT", cursive;
}
.header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;
  height: 8rem;
  min-width: 100% !important;
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.25);
}
</style>
