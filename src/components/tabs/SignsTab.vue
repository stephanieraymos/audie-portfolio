<template>
  <div>
    <div class="container">
      <div v-for="sign in signs" :key="sign.title" class="sign">
        <div class="title">{{ sign.title }}</div>
        <img
          class="image"
          :src="`images/Signs/${sign.src}.png`"
          :alt="sign.src" loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const signs = [
  { title: "Imperial Estates", src: "IE-sign" },
  { title: "Pioneer", src: "Pioneer-Sign" },
  { title: "Ponderosa", src: "Ponderosa-MHP" },
  { title: "Ridgeview", src: "Ridgeview-BB2" },
  { title: "Tye RV", src: "TyeRV_East_BB" },
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
.sign {
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
