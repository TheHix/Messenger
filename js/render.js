import {PAGE} from "./view.js";
import {storage} from "./storage.js";
import {addMessage, Message} from "./converter.js";
import Cookies from "js-cookie";
export function renderUserData(data) {
    const username = data['name'] ?? 'Стив';
    PAGE.NAME_INPUT.value = username;
    Cookies.set('email', data.email);
}
export function renderMessage(data, moving) {
    const initialData = data.length > 20 ? data.slice(0, 20) : data;
    storage.saveMessageHistory(data.slice(initialData.length));
    initialData.forEach((message) => {
        let condition = message.user.email == Cookies.get('email') ? 'my' : 'interlocutor';
        let username = message.user.email == Cookies.get('email') ? '' : message.user.name;
        parametersMessage = new Message(message.text, message.createdAt, username, condition);
        addMessage(parametersMessage, 'prepend', moving);
    });
    
}
export function renderCurrentMessage(data, moving) {
    let condition = data.user.email == Cookies.get('email') ? 'my' : 'interlocutor';
    let username = data.user.email == Cookies.get('email') ? '' : data.user.name;
    parametersMessage = new Message(data.text, data.createdAt, username, condition);
    addMessage(parametersMessage, 'append', moving);
}
export function renderMessagesOnScroll() {
    const scrollHeight = PAGE.MESSAGE_BODY.scrollHeight;
    PAGE.MESSAGE_BODY.addEventListener('scroll', displayMessages);
    function displayMessages(event) {
        if (event.target.scrollTop == 0){
            renderMessage(storage.getMessageHistory());
            PAGE.MESSAGE_BODY.scrollTop = scrollHeight;
        };
    }
}