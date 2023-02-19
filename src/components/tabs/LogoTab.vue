<template>
  <div>
    <div v-if="loading" class="loading">Loading images ...</div>
    <Carousel :items-to-show="1.5" :wrap-around="true" v-if="!loading">
      <Slide v-for="(logo, index) in logos" :key="index" class="carousel__item">
        <div
          class="image-wrapper"
          @mouseenter="showTitle = true"
          @mouseleave="showTitle = false"
        >
          <img
            :src="`images/Logos/${logo.src}.png`"
            :alt="logo.src"
            ref="images"
            loading="lazy"
          />
          <div class="title" v-if="showTitle">{{ logo.title }}</div>
        </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
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
const showTitle = ref(false);

const images = ref([]);

onMounted(() => {
  images.value = logos.map((logo) => {
    const img = new Image();
    img.src = `images/Logos/${logo.src}.png`;
    img.onload = () => {
      imagesLoaded.value++;
      if (imagesLoaded.value === logos.length) {
        loading.value = false;
      }
    };
    return img;
  });
});
</script>

<style lang="scss" scoped>
.carousel__item {
  position: relative;

  display: flex;
  min-height: 200px;
  width: 100%;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
}
.image-wrapper {
  position: relative;
}
.title {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: white;
  text-shadow: 1px 1px 2px black;
  background-color: rgba(0, 0, 0, 0.5);
}

.carousel__item:hover .title {
  display: flex;
}

.carousel__slide {
  padding: 10px;
}

img {
  width: 100%;
}
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}
</style>
