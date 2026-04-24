<template>
  <div class="container-fluid h-100">
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
html {
  font-size: 14px;
}

@media (min-width: 768px) {
  html {
    font-size: 16px;
  }
}

.container {
  max-width: 960px;
}
</style>
