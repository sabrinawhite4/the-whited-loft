<script>
import ImageComponent from "./ImageComponent.vue";
import imagePaths from "../lib/image-paths";
export default {
  name: "GalleryComponent",
  components: { ImageComponent },
  computed: {
    imagePathsMapped() {
      return [...imagePaths];
    },
  },
  mounted() {
    console.log("gallery");
  },
};
</script>

<template>
  <div class="image-wrapper">
    <ImageComponent
      class="gallery-photos"
      v-for="imagePath in imagePathsMapped"
      :key="imagePath"
      :imageSource="'src/assets/' + imagePath"
    />
  </div>
</template>

<style>
.gallery-photos {
  max-height: 40vh;
  max-width: 40vw;
  margin: 0;
}
.image-wrapper {
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
}
</style>
