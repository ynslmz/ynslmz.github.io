<script setup lang="ts">
import { computed } from 'vue';
import { useTheme } from '../composables/useTheme';

const { theme, toggleTheme } = useTheme();

const isDark = computed(() => theme.value === 'dark');
const label = computed(() =>
  isDark.value ? 'Switch to light theme' : 'Switch to dark theme'
);
</script>

<template>
  <button
    type="button"
    class="theme-toggle"
    :aria-label="label"
    :title="label"
    @click="toggleTheme"
  >
    <i :class="isDark ? 'bi bi-sun' : 'bi bi-moon-stars'"></i>
  </button>
</template>

<style lang="scss" scoped>
.theme-toggle {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;

  background-color: transparent;
  color: var(--text-color);
  border: 1px solid var(--icon-border);
  border-radius: 50%;
  font-size: 1.25rem;
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.theme-toggle:hover,
.theme-toggle:focus-visible {
  color: var(--accent);
  border-color: var(--accent);
}

.theme-toggle:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
</style>
