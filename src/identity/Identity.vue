<script setup lang="ts">
const currentYear = new Date().getFullYear();

const links = [
  { url: 'https://twitter.com/ynslmz', icon: 'bi bi-twitter' },
  { url: 'https://www.linkedin.com/in/ynslmz/', icon: 'bi bi-linkedin' },
  { url: 'https://www.instagram.com/yns.lmz/', icon: 'bi bi-instagram' },
  { url: 'https://stackoverflow.com/users/3129784/ynslmz', icon: 'fab fa-stack-overflow' },
  { url: 'https://github.com/ynslmz', icon: 'bi bi-github' },
  { url: 'mailto:yns4832@gmail.com', icon: 'bi bi-envelope' },
];
</script>

<template>
  <div class="d-flex flex-column justify-content-center align-items-center h-100">
    <div class="p-3 pt-0 mx-auto text-center">
      <h1 class="fs-1 fw-normal text-white">Yunus ÖLMEZ</h1>
      <p class="fs-4 text-white">
        Senior Software Developer with more than
        {{ currentYear - 2012 }} years of experience.
      </p>
      <p class="fs-5 text-white"> Houten - Netherlands </p>
    </div>

    <ul class="text-center p-3 pb-5 mb-5 pt-0">
      <li v-for="link in links" :key="link.url" class="icon">
        <a :href="link.url" class="icon-link">
          <i :class="link.icon"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles";

ul {
  display: block;
  list-style: none;
}

li {
  display: inline-block;
  position: relative;
}

.icon {
  margin: 0.5em;
  color: styles.$text-color;
}

.icon-link {
  border: 1px solid #dddddd;
  border-radius: 100%;
  font-size: 1.75em;
  color: styles.$text-color;
  height: 2.5em;
  width: 2.5em;
  line-height: 2.5em;
  text-align: center;
  display: block;
}
</style>
