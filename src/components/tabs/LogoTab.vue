<template>
  <div>
    <div class="container">
      <div v-for="logo in logos" :key="logo.title" class="logo">
        <div class="title">{{ logo.title }}</div>
        <img
          class="image"
          :src="`images/Logos/${logo.src}`"
          :alt="logo.src"
          loading="lazy"
        />
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
  { title: "Glenbrook", src: "Glenbrook.jpg" },
  { title: "Greenspot", src: "Greenspot.png" },
  { title: "Pioneer", src: "Pioneer-logo.png" },
  { title: "Shady Grove", src: "Shady_Grove.png" },
  { title: "Sunrise MHP", src: "SunriseMHP-logo.png" },
  { title: "Pollock Pines", src: "PollockPines.png" },
];
</script>

<style lang="scss" scoped>
.container {
  padding-top: 2em;
  background: var(--color-khaki);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: repeat(auto);
  grid-gap: 15px;
  justify-items: center;
}
.map {
  margin: 10px;
}
.image {
  width: 250px;
}
.title {
  text-align: center;
  color: black;
  margin-bottom: 0.5em;
}
</style>
