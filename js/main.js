import {PAGE, CHANGE, CONSTRUCT} from "./view.js";
import {requestAuthenticationCode, requestMessage, requestUsername, changeUsername} from "./requests.js";
import Cookies from 'js-cookie';
render();
function render() {
    requestMessage(Cookies.get('token'));
    requestUsername(Cookies.get('token'));
}
PAGE.EXIT_BTN.forEach((e) => {
    e.addEventListener('click', () => {
        CHANGE.closeWindows();
        PAGE.MAIN_WINDOW.classList.remove('blur');
    });
});
PAGE.SETTINGS_BTN.addEventListener('click', () => {
    CHANGE.closeWindows();
    PAGE.SETTINGS_WINDOW.classList.add('active');
    PAGE.MAIN_WINDOW.classList.add('blur');
    
    PAGE.NAME_FORM.addEventListener('submit', (e) => {
        if (!PAGE.NAME_INPUT.value) return;
        e.preventDefault();
        changeUsername(PAGE.NAME_INPUT.value, Cookies.get('token'));
    });
});
PAGE.LOG_BTN.addEventListener('click', () => {
    CHANGE.closeWindows();

    PAGE.LOG_WINDOW.classList.add('active');
    PAGE.MAIN_WINDOW.classList.add('blur');

    PAGE.EMAIL_FORM.addEventListener('submit', (e) => {
        e.preventDefault();

        requestAuthenticationCode({email: PAGE.INPUT_EMAIL.value});
        CHANGE.closeWindows();
        PAGE.CODE_WINDOW.classList.add('active');

        PAGE.CONFIRMATION_FORM.addEventListener('submit', (e) => {
            e.preventDefault();

            Cookies.set('token', PAGE.CODEfromINPUT.value);
            CHANGE.closeWindows();
            PAGE.MAIN_WINDOW.classList.remove('blur');
        });
    });
});
PAGE.MESSAGE_BAR.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!PAGE.INPUT_BAR.value) return;
    CONSTRUCT.addMessage(PAGE.INPUT_BAR.value);
    moveScroll();

    PAGE.INPUT_BAR.value = "";
});
function moveScroll() {
    PAGE.MESSAGE_BODY.scrollTop = PAGE.MESSAGE_BODY.scrollHeight;
}