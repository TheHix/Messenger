import {PAGE} from "./view.js";
import {modalWindowCallLogic} from "./modals.js";
import {createAddMessage, moveScroll} from "./converter.js";
import {requestMessage, requestUserData, createTransferableMessage} from "./network.js";
import Cookies from 'js-cookie';
modalWindowCallLogic();

PAGE.TOKEN = Cookies.get('token');
requestMessage(PAGE.TOKEN);
requestUserData(PAGE.TOKEN);


PAGE.MESSAGE_BAR.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!PAGE.INPUT_BAR.value) return;

    createAddMessage(PAGE.INPUT_BAR.value);
    moveScroll();

    createTransferableMessage(PAGE.TOKEN, PAGE.INPUT_BAR.value);
    PAGE.INPUT_BAR.value = "";
});