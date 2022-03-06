<script>
export default {
  name: "ImageComponent",
  props: ["imageSource", "imageAlt"],
  mounted() {
    console.log("mounted");
  },
};
</script>

<template>
  <img :src="imageSource" alt="" />
</template>
