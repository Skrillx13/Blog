(() => {
  'use strict'

  const getStoredTheme = () => localStorage.getItem('theme');
  const setStoredTheme = theme => localStorage.setItem('theme', theme);

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      return storedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const setTheme = theme => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    updateThemeButton(theme);
  };

  const updateThemeButton = (theme) => {
    const themeButton = document.querySelector('#theme-toggle-button');
    const themeIcon = themeButton.querySelector('.theme-icon-active use');
    const themeText = themeButton.querySelector('#bd-theme-text');

    if (theme === 'light') {
      themeIcon.setAttribute('href', '#moon-stars');
    } else {
      themeIcon.setAttribute('href', '#sun');
    }
  };

  const toggleTheme = () => {
    const currentTheme = getPreferredTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setStoredTheme(newTheme);
    setTheme(newTheme);
  };

  window.addEventListener('DOMContentLoaded', () => {
    const preferredTheme = getPreferredTheme();
    setTheme(preferredTheme);

    const themeButton = document.querySelector('#theme-toggle-button');
    themeButton.addEventListener('click', toggleTheme);
  });
})();