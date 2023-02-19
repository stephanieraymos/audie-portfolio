<template>
  <div>
    <div v-if="loading">Loading images ...</div>
    <Carousel :items-to-show="1.5" :wrap-around="true">
      <Slide v-for="(sign, index) in signs" :key="index" class="carousel__item">
        <img
          :src="`images/Signs/${sign.src}.png`"
          :alt="sign.src"
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
const signs = [
  { title: "Imperial Estates", src: "IE-sign" },
  { title: "Pioneer", src: "Pioneer-Sign" },
  { title: "Ponderosa", src: "Ponderosa-MHP" },
  { title: "Ridgeview", src: "Ridgeview-BB2" },
  { title: "Tye RV", src: "TyeRV_East_BB" },
];

const imagesLoaded = ref(0);
const loading = ref(true);

const images = signs.map((sign) => new Image());

images.forEach((image, index) => {
  image.src = `images/Signs/${signs[index].src}.png`;
  image.onload = () => {
    imagesLoaded.value++;
    if (imagesLoaded.value === signs.length) {
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
