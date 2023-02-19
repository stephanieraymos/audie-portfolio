<template>
  <div>
    <div v-if="loading">Loading images ...</div>
    <Carousel :items-to-show="1.5" :wrap-around="true">
      <Slide v-for="(logo, index) in logos" :key="index" class="carousel__item">
        <img
          :src="`images/Logos/${logo.src}.png`"
          :alt="logo.src"
          ref="images"
          loading="lazy"
        />
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { ref } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

const logos = [
  { title: "Acres of Paradise", src: "AOP-logo" },
  { title: "Bakersfield", src: "Bakersfield" },
  { title: "Blue Haven", src: "Blue-Haven" },
  { title: "Cortez", src: "Cortez-Logo" },
  { title: "Greenspot", src: "Greenspot" },
  { title: "Pioneer", src: "Pioneer-logo" },
  { title: "Shady Grove", src: "Shady_Grove" },
  { title: "Sunrise MHP", src: "SunriseMHP-logo" },
  { title: "Pollock Pines", src: "PollockPines" },
];
const imagesLoaded = ref(0);
const loading = ref(true);

const images = logos.map((logo) => new Image());

images.forEach((image, index) => {
  image.src = `images/Logos/${logos[index].src}.png`;
  image.onload = () => {
    imagesLoaded.value++;
    if (imagesLoaded.value === logos.length) {
      loading.value = false;
    }
  };
});
</script>

<style lang="scss" scoped>
.carousel__item {
  display: flex;
  min-height: 200px;
  width: 100%;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

img {
  width: 100%;
  margin: 0 10px;
}
</style>