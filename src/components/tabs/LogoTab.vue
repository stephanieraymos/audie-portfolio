<template>
  <div>
    <h1>LOGOS</h1>
    <div class="container">
      <div v-for="logo in logos" :key="logo.title" class="logos">
        <div class="title">{{ logo.title }}</div>
        <!-- <img src="../../assets/headshot.jpg" alt="logo.src" /> -->
        <!-- <img :src="getImgUrl(logo.src)" :alt="logo.src" /> -->
        <img :src="`images/${logo.src}.jpg`" :alt="logo.src" />
        <!-- portfolio/src/assets/headshot.jpg -->
        <!-- <img :src="'../../assets/' + logo.src" :alt="logo.src"> -->
      </div>
    </div>
  </div>
</template>

<script setup>
const logos = [
  { title: "Some Title", src: "headshot" },
  { title: "Another Title", src: "headshot" },
];

// function getImgUrl(pic) {
//   var images = require.context("../assets/", false, /\.png$/);
//   return images("./" + pic + ".jpg");
// }
</script>

<style lang="scss" scoped></style>
