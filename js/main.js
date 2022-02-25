import {PAGE} from "./view.js";
import {modalWindowCallLogic} from "./modals.js";
import {requestMessage, requestUserData} from "./network.js";
import {renderCurrentMessage} from "./render.js";
import Cookies from 'js-cookie';
modalWindowCallLogic();

PAGE.TOKEN = Cookies.get('token');
requestMessage(PAGE.TOKEN);
requestUserData(PAGE.TOKEN);

PAGE.MESSAGE_BAR.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!PAGE.INPUT_BAR.value) return;
    const socket = new WebSocket(`ws://chat1-341409.oa.r.appspot.com/websockets?${PAGE.TOKEN}`);
    socket.send(JSON.stringify({text: PAGE.INPUT_BAR.value}));
    socket.onmessage = function (event) {
        console.log(event.data);
        renderCurrentMessage(JSON.parse(event.data));
    };

    PAGE.INPUT_BAR.value = "";
});