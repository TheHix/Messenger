import {PAGE, URL} from "./view.js";
PAGE.EXIT_BTN.forEach((e) => {
    e.addEventListener('click', () => {
        closeWindows();
        PAGE.MAIN_WINDOW.classList.remove('blur');
    });
})
PAGE.SETTINGS_BTN.addEventListener('click', () => {
    closeWindows();
    PAGE.SETTINGS_WINDOW.classList.add('active');
    PAGE.MAIN_WINDOW.classList.add('blur');
});
PAGE.LOG_BTN.addEventListener('click', () => {
    closeWindows();
    PAGE.LOG_WINDOW.classList.add('active');
    PAGE.MAIN_WINDOW.classList.add('blur');
    PAGE.EMAIL_FORM.addEventListener('submit', (e) => {
        e.preventDefault();
    })
});
function closeWindows() {
    PAGE.SETTINGS_WINDOW.classList.remove('active');
    PAGE.LOG_WINDOW.classList.remove('active');
}