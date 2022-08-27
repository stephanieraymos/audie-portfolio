<template>
  <div>
    <div class="container">
      <div v-for="map in maps" :key="map.title" class="map">
        <div class="title">{{ map.title }}</div>
        <img
          class="image"
          :src="`images/Maps/${map.src}.png`"
          :alt="map.src"
          loading="lazy"
        />
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
