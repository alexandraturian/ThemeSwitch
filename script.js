import { DARK_THEME, LIGHT_THEME } from './colors.js';

const themeSwitcher = document.getElementById('theme-switch');

const switchTheme = e => {
  const isDarkTheme = !!e.target.checked;
  const theme = isDarkTheme ? DARK_THEME : LIGHT_THEME;

  setTheme(theme);
  localStorage.setItem('theme', isDarkTheme ? 'DARK' : 'LIGHT');
};

const initTheme = () => {
  const themeName = localStorage.getItem('theme');
  const isDarkTheme = themeName === 'DARK';

  const theme = isDarkTheme ? DARK_THEME : LIGHT_THEME;
  themeSwitcher.checked = isDarkTheme;
  setTheme(theme);
};

const setTheme = theme => {
  let root = document.documentElement;
  root.style.setProperty('--color-bg', theme['color-bg']);
  root.style.setProperty('--color-accent', theme['color-accent']);
  root.style.setProperty('--color-main', theme['color-main']);
}

initTheme();
themeSwitcher.addEventListener('change', switchTheme);

