<script>
import ImageComponent from "../components/ImageComponent.vue";
export default {
  setup() {
    return;
  },
  components: { ImageComponent },
};
</script>

<template>
  <main>
    <ImageComponent
      class="home-image"
      imageSource="src/assets/home.jpeg"
      alt="The White Loft"
    />
    <h2 class="home-intro">Utah County's Newest and Finest Wedding Venue!</h2>
  </main>
</template>

<style>
.home-image {
  width: 100%;
  max-width: 1280px;
  margin: 2rem auto;
  box-shadow: 0 0.15rem 1rem rgba(0, 0, 0, 0.25);
}
.home-intro {
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
}
</style>
