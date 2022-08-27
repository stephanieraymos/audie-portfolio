<template>
  <div class="about-container">
    <h1 class="text">Hi, I'm Audie!</h1>
    <p>
      I've been working in marketing and creative design for over 4 years and I've grown very passionate about it. I have extensive knowledge in logo design and signage of all types. I love what I do and am excited to share my passion with you.
    </p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.about-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  margin: 5em;
  position: relative;
}
.text {
  max-width: fit-content;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid var(--color-light-blue); /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 10px auto 0; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.05em; /* Adjust as needed */
  animation: typing 2s steps(40, end), blink-caret 0.75s step-end infinite;
}
/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: var(--color-light-blue);
  }
}
@media only screen and (min-width: 1000px) {
  .about-container {
    margin: 5em 20%;
  }
}
</style>
