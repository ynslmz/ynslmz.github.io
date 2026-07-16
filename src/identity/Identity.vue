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
  <div class="identity">
    <div class="text-center">
      <h1 class="name">Yunus ÖLMEZ</h1>
      <p class="tagline muted">
        Senior Software Developer with more than
        {{ currentYear - 2012 }} years of experience.
      </p>
      <p class="location muted">Houten - Netherlands</p>
    </div>

    <ul class="links">
      <li v-for="link in links" :key="link.url">
        <a :href="link.url" class="icon-link">
          <i :class="link.icon"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.identity {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: clamp(1.5rem, 5vh, 3rem);
  padding: clamp(1rem, 4vw, 2rem);
  box-sizing: border-box;
}

.muted {
  color: var(--text-muted);
}

.name {
  margin: 0 0 0.5rem;
  font-weight: 400;
  line-height: 1.15;
  font-size: clamp(1.75rem, 8vw, 3rem);
}

.tagline {
  margin: 0 auto 0.5rem;
  max-width: 22em;
  line-height: 1.4;
  font-size: clamp(1.05rem, 4.5vw, 1.5rem);
}

.location {
  margin: 0;
  font-size: clamp(0.95rem, 3.5vw, 1.25rem);
}

.links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: clamp(0.5rem, 2.5vw, 1rem);
  margin: 0;
  padding: 0;
  list-style: none;
}

.icon-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.4em;
  height: 2.4em;
  font-size: clamp(1rem, 4.5vw, 1.6rem);
  color: var(--icon-color);
  border: 1px solid var(--icon-border);
  border-radius: 50%;
  text-decoration: none;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.icon-link:hover,
.icon-link:focus-visible {
  color: var(--accent);
  border-color: var(--accent);
}
</style>
