import {PAGE} from "./view.js";
import {requestAuthenticationCode} from "./api.js";
import Cookies from 'js-cookie';

export function closeCurrentWindow(elem) {
    elem.currentTarget.parentElement.classList.remove('active');
    PAGE.MAIN_WINDOW.classList.remove('blur');
}

export function modalWindowCallLogic() {
    PAGE.EMAIL_FORM.addEventListener('submit', sendAuthenticationCode);

    PAGE.BTN.forEach((event) => {
        event.addEventListener('click', openWindow);
    });
    PAGE.EXIT_BTN.forEach((event) => {
        event.addEventListener('click', closeCurrentWindow);
    });
}


function openWindow(e){
    if (e.currentTarget == PAGE.LOG_BTN && e.currentTarget.innerHTML == 'Выйти'){
        console.log('da');
        Cookies.remove('token');
        location.reload();
    }
    closeAllWindows();

    let pathBtn = e.currentTarget.getAttribute('data-path');
    PAGE.MAIN_WINDOW.classList.add('blur');
    document.querySelector(`[data-target = ${pathBtn}]`).classList.add('active');
}
function sendAuthenticationCode(e) {
    e.preventDefault();

    if (!PAGE.INPUT_EMAIL.value) return;

    requestAuthenticationCode({email: PAGE.INPUT_EMAIL.value});
    closeAllWindows();

    let pathSubmit = PAGE.EMAIL_FORM.getAttribute('data-path');
    PAGE.MAIN_WINDOW.classList.add('blur');
    document.querySelector(`[data-target = ${pathSubmit}]`).classList.add('active');
}
function closeAllWindows() {
    PAGE.MODAl_WINDOWS.forEach((e) => {
        e.classList.remove('active');
    });
}