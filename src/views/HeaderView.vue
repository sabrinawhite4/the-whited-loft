<script>
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// library.add(faUserSecret);
</script>
<template>
  <div class="header">
    <h1 class="name">The White Loft</h1>
    <!-- <font-awesome-icon icon="fa-solid fa-bars" /> -->
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.name {
  font-size: 4rem;
  font-weight: 250;
  margin: 0;
  padding: 0;
  color: black;
  font-family: "Brush Script MT", cursive;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 6rem;
  min-width: 100% !important;
  background: rgba(247, 148, 137, 0.808);
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.25);
}
</style>
