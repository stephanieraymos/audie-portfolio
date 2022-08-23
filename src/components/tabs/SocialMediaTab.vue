<template>
  <div>
    <div class="container">
      <div v-for="social in socials" :key="social.title" class="social">
        <div class="title">{{ social.title }}</div>
        <img class="image" :src="`images/${social.src}.jpg`" :alt="social.src" />
      </div>
    </div>
  </div>
</template>

<script setup>
const socials = [
  { title: "Some Title", src: "headshot" },
  { title: "Another Title", src: "headshot" },
];
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.social {
  margin: 10px;
}
.image {
  width: 200px;
}
</style>
