import {PAGE} from "./view.js";
PAGE.BTN_SETTINGS.addEventListener('click', () => {
    PAGE.SETTINGS_WINDOW.classList.add('active');
    PAGE.MAIN_WINDOW.classList.add('blur');
});
PAGE.EXIT.addEventListener('click', () => {
    PAGE.SETTINGS_WINDOW.classList.remove('active');
    PAGE.MAIN_WINDOW.classList.remove('blur');
});