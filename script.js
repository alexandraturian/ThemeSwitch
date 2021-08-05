// import { LIGHT_THEME, DARK_THEME } from './colors';
const DARK_THEME = {
    '--color-bg': '#212121',
    'color-main': '#ffffff',
    'color-accent': '#009688',
};

const LIGHT_THEME = {
    'color-bg': '#ffffff',
    'color-main': '#f44336',
    'color-accent': '#212121',
};
//
// const THEMES = { DARK_THEME, LIGHT_THEME };
//
// // THEMES[localStoageTheme]

const switchElem = document.getElementById('theme-switch');

const setTheme = theme => {
    const root = document.documentElement;

    // for (const property in theme) {
    //     root.style.setProperty(property, theme[property]);
    //     // console.log(`${property}: ${object[property]}`);
    // }

    root.style.setProperty('--color-bg', theme['--color-bg']);
    root.style.setProperty('--color-main', theme['color-main']);
    root.style.setProperty('--color-accent', theme['color-accent']);
};

const switchTheme = e => {
    const isDarkTheme = e.target.checked;
    const theme = isDarkTheme ? DARK_THEME : LIGHT_THEME;

    setTheme(theme);
    localStorage.setItem('isDarkTheme', isDarkTheme);
};

const initTheme = () => {
    // const theme = localStorage.getItem('isDarkTheme'); // DARK, LIGHT
    // const isDarkTheme = theme === 'DARK_THEME';
    const isDarkTheme = JSON.parse(localStorage.getItem('isDarkTheme'));
    console.log(isDarkTheme, typeof isDarkTheme);
    switchElem.checked = isDarkTheme;

    const theme = isDarkTheme ? DARK_THEME : LIGHT_THEME;
    setTheme(theme);
}

initTheme();
switchElem.addEventListener('change', switchTheme);

