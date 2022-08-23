<template>
  <div>
    <div class="container">
      <div v-for="map in maps" :key="map.title" class="map">
        <div class="title">{{ map.title }}</div>
        <img class="image" :src="`images/${map.src}.jpg`" :alt="map.src" />
      </div>
    </div>
  </div>
</template>

<script setup>
const maps = [
  { title: "Some Title", src: "headshot" },
  { title: "Another Title", src: "headshot" },
];
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}
.map {
  margin: 10px;
}
.image {
  width: 200px;
}
</style>
