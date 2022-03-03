import {PAGE} from "./view.js";
import {modalWindowCallLogic, closeCurrentWindow} from "./modals.js";
import {requestMessage, requestUserData, changeUsername} from "./api.js";
import {renderCurrentMessage, renderMessagesOnScroll} from "./render.js";
import Cookies from 'js-cookie';

let token;
let socket;

if (!Cookies.get('token')) {
    PAGE.LOG_BTN.innerHTML = 'Войти';

}
else {
    PAGE.LOG_BTN.innerHTML = 'Выйти';
    token = Cookies.get('token');
    socket = getWebSocketConnectionAddress(token);

    requestMessage(token);
    requestUserData(token);
}

function getWebSocketConnectionAddress(token) {
    return new WebSocket(`ws://chat1-341409.oa.r.appspot.com/websockets?${token}`);
}

renderMessagesOnScroll();
modalWindowCallLogic();

PAGE.MESSAGE_BAR.addEventListener('submit', sendMessage);
function sendMessage(e) {
    e.preventDefault();
    if (!PAGE.INPUT_BAR.value) return;
    socket.send(JSON.stringify({text: PAGE.INPUT_BAR.value}));
    socket.onmessage = function (event) {
        renderCurrentMessage(JSON.parse(event.data), 'moveScroll');
    };
    PAGE.MESSAGE_BAR.reset();
}

PAGE.CONFIRMATION_FORM.addEventListener('submit', sendVerificationCode);
function sendVerificationCode(e) {
    e.preventDefault();

    if (!PAGE.CODEfromINPUT.value) return;
    Cookies.set('token', PAGE.CODEfromINPUT.value);

    requestMessage(PAGE.CODEfromINPUT.value);
    requestUserData(PAGE.CODEfromINPUT.value);


    closeCurrentWindow(e);
}

PAGE.NAME_FORM.addEventListener('submit', sendUsername);
function sendUsername(e) {
    e.preventDefault();

    if (!PAGE.NAME_INPUT.value) return;

    changeUsername(PAGE.NAME_INPUT.value, Cookies.get('token'));
    closeCurrentWindow(e);
}