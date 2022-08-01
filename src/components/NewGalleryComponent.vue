<template>
  <div class="container mx-auto">
    <div class="lg:gap-2 lg:grid lg:grid-cols-3">
      <div
        class="w-full rounded"
        v-for="image in imagePathsMapped"
        :key="image.id"
      >
        <img
          :src="'src/assets/' + image"
          alt="image"
          class="object-cover h-full w-full"
        />
      </div>
    </div>
  </div>
</template>
<script>
import imagePaths from "../lib/image-paths";
export default {
  computed: {
    imagePathsMapped() {
      return [...imagePaths];
    },
  },
};
</script>
