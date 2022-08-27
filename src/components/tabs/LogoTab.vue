<template>
  <div>
    <div class="container">
      <div v-for="logo in logos" :key="logo.title" class="logo">
        <div class="title">{{ logo.title }}</div>
        <img class="image" :src="`images/Logos/${logo.src}`" :alt="logo.src" loading="lazy"/>
      </div>
    </div>
  </div>
</template>

<script setup>
const logos = [
  { title: "Acres of Paradise", src: "AOP-logo.png" },
  { title: "Bakersfield", src: "Bakersfield.png" },
  { title: "Blue Haven", src: "Blue-Haven.png" },
  { title: "Cortez", src: "Cortez-Logo.png" },
  { title: "Another Title", src: "Glenbrook.jpg" },
  { title: "Greenspot", src: "Greenspot.png" },
  { title: "Pioneer", src: "Pioneer-logo.png" },
  { title: "Shady Grove", src: "Shady_Grove.png" },
  { title: "Sunrise MHP", src: "SunriseMHP-logo.png" },
  { title: "Pollock Pines", src: "PollockPines.png" },
];
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto);
  grid-gap: 15px;
  justify-items: center;
}
.logo {
  margin: 10px;
}
.image {
  width: 200px;
}
.title {
  text-align: center;
  margin-bottom: 0.5em;
}
</style>
