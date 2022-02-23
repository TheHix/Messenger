import {PAGE} from "./view.js";
import {modalWindowCallLogic} from "./modals.js";
import {createAddMessage, moveScroll} from "./converter.js";
import {requestMessage, requestUsername} from "./network.js";
import Cookies from 'js-cookie';
modalWindowCallLogic();

const token = Cookies.get('token');
requestMessage(token);
requestUsername(token);

PAGE.MESSAGE_BAR.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!PAGE.INPUT_BAR.value) return;

    createAddMessage(PAGE.INPUT_BAR.value);
    moveScroll();

    PAGE.INPUT_BAR.value = "";
});