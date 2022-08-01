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
    <h2
      class="text-xl text-black absolute top-[90%] left-1/2 -translate-x-1/2 translate-y-3/4"
    >
      Utah County's Newest and Finest Wedding Venue!
    </h2>
  </main>
</template>

<style>
.home-image {
  max-width: 1480px;
  margin: 2rem auto;
  box-shadow: 0 0.15rem 1rem rgba(0, 0, 0, 0.25);
}
</style>
