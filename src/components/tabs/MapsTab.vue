<template>
  <div>
    <div v-if="loading">Loading images ...</div>
    <Carousel :items-to-show="1.5" :wrap-around="true">
      <Slide v-for="(map, index) in maps" :key="index" class="carousel__item">
        <img
          :src="`images/Maps/${map.src}.png`"
          :alt="map.src"
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
const maps = [
  { title: "Alder Acres", src: "Alder-Acresmap" },
  { title: "Clarks Run", src: "Clarks-Run" },
  { title: "Country Lake", src: "CountryLake-Map" },
  { title: "Greentree", src: "Greentree-map" },
  { title: "Holiday Manor", src: "Holiday-Manor-Map" },
  { title: "Monterey", src: "Monterey" },
];
const imagesLoaded = ref(0);
const loading = ref(true);

const images = maps.map((map) => new Image());

images.forEach((image, index) => {
  image.src = `images/Maps/${maps[index].src}.png`;
  image.onload = () => {
    imagesLoaded.value++;
    if (imagesLoaded.value === maps.length) {
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
