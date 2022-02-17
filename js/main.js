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
});
PAGE.EMAIL_FORM.addEventListener('submit', (e) => {
    console.log('cliick');
    e.preventDefault();
    closeWindows();
    requestСode({email: PAGE.INPUT_EMAIL.value});
    PAGE.CODE_WINDOW.classList.add('active');
})
async function requestСode(email) {
    try {
        const response = await fetch(URL, {
            method: 'POST',
            body: JSON.stringify(email),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
        const json = await response.json();
        return JSON.stringify(json);
    } catch (error) {
        return error
    }
}
function closeWindows() {
    PAGE.SETTINGS_WINDOW.classList.remove('active');
    PAGE.LOG_WINDOW.classList.remove('active');
    PAGE.CODE_WINDOW.classList.remove('active');
}