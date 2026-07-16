import { ref, readonly } from 'vue';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

const prefersDark = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches;

const storedPreference = (): Theme | null => {
  const value = localStorage.getItem(STORAGE_KEY);
  return value === 'light' || value === 'dark' ? value : null;
};

const resolveInitialTheme = (): Theme =>
  storedPreference() ?? (prefersDark() ? 'dark' : 'light');

const theme = ref<Theme>(resolveInitialTheme());

const applyTheme = (value: Theme) => {
  theme.value = value;
  document.documentElement.setAttribute('data-theme', value);
};

// Apply the resolved theme immediately so the DOM matches on first load.
applyTheme(theme.value);

// Live-follow the OS while the user hasn't made an explicit choice.
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (event) => {
    if (storedPreference() === null) {
      applyTheme(event.matches ? 'dark' : 'light');
    }
  });

export function useTheme() {
  const toggleTheme = () => {
    const next: Theme = theme.value === 'dark' ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  };

  return {
    theme: readonly(theme),
    toggleTheme,
  };
}
