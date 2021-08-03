import { DARK_THEME, LIGHT_THEME } from '/colors.js';

const switchTheme = e => {
  // (e.target.checked) ? 
  //   document.body.setAttribute('data-theme', 'dark') : document.body.removeAttribute('data-theme');
  const isDarkTheme = !!e.target.checked;
  const theme = isDarkTheme ? DARK_THEME : LIGHT_THEME;
  localStorage.setItem('theme', theme);
  
  let root = document.documentElement;
  root.style.setProperty('--color-bg', theme['color-bg']);
  root.style.setProperty('--color-accent', theme['color-accent']);
  root.style.setProperty('--color-main', theme['color-main']);
};

document
  .getElementById('theme-switch')
  .addEventListener('change', switchTheme);

