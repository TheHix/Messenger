import {PAGE, CHANGE, CONSTRUCT} from "./view.js";
import {modalWindowCallLogic} from "./modals.js";
// import {requestAuthenticationCode, requestMessage, requestUsername, changeUsername} from "./network.js";
import Cookies from 'js-cookie';
modalWindowCallLogic();
// render();
// function render() {
//     requestMessage(Cookies.get('token'));
//     requestUsername(Cookies.get('token'));
// }
PAGE.NAME_FORM.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!PAGE.NAME_INPUT.value) return;
    // changeUsername(PAGE.NAME_INPUT.value, Cookies.get('token'));
});
PAGE.CONFIRMATION_FORM.addEventListener('submit', (e) => {
    e.preventDefault();

    Cookies.set('token', PAGE.CODEfromINPUT.value);
    CHANGE.closeWindows();
    PAGE.MAIN_WINDOW.classList.remove('blur');
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