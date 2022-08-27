<template>
  <div>
    <div class="container">
      <div v-for="map in maps" :key="map.title" class="map">
        <div class="title">{{ map.title }}</div>
        <img class="image" :src="`images/Maps/${map.src}.png`" :alt="map.src" />
      </div>
    </div>
  </div>
</template>

<script setup>
const maps = [
  { title: "Alder Acres", src: "Alder-Acresmap" },
  { title: "Clarks Run", src: "Clarks-Run" },
  { title: "Country Lake", src: "CountryLake-Map" },
  { title: "Greentree", src: "Greentree-map" },
  { title: "Holiday Manor", src: "Holiday-Manor-Map" },
  { title: "Monterey", src: "Monterey" },
];
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.map {
  margin: 10px;
}
.image {
  width: 200px;
}
.title {
  text-align: center;
}
</style>
