import {PAGE} from "./view.js";
import {requestAuthenticationCode} from "./api.js";
export function modalWindowCallLogic() {
    PAGE.EMAIL_FORM.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!PAGE.INPUT_EMAIL.value) return;

        requestAuthenticationCode({email: PAGE.INPUT_EMAIL.value});
        closeAllWindows();

        let pathSubmit = PAGE.EMAIL_FORM.getAttribute('data-path');
        PAGE.MAIN_WINDOW.classList.add('blur');
        document.querySelector(`[data-target = ${pathSubmit}]`).classList.add('active');
    });
    PAGE.BTN.forEach((event) => {
        event.addEventListener('click', (e) => {
            closeAllWindows();

            let pathBtn = e.currentTarget.getAttribute('data-path');
            PAGE.MAIN_WINDOW.classList.add('blur');
            document.querySelector(`[data-target = ${pathBtn}]`).classList.add('active');
        });
    });
    PAGE.EXIT_BTN.forEach((event) => {
        event.addEventListener('click', closeCurrentWindow);
    });
}
function closeAllWindows() {
    PAGE.MODAl_WINDOWS.forEach((e) => {
        e.classList.remove('active');
    });
}
export function closeCurrentWindow(elem) {
    elem.currentTarget.parentElement.classList.remove('active');
    PAGE.MAIN_WINDOW.classList.remove('blur');
} 