import {PAGE} from "./view.js";
import {storage} from "./storage.js";
import {addMessage, Message} from "./converter.js";
import Cookies from "js-cookie";
export function renderUserData(data) {
    const username = data['name'] ?? 'Стив';
    PAGE.NAME_INPUT.value = username;
    Cookies.set('email', data.email);
}
export function renderMessage(data) {
    const initialData = data.messages.reverse().slice(0, 20);
    storage.saveMessageHistory(data.messages.reverse().slice(20));
    initialData.forEach((message) => {
        let condition = message.user.email == Cookies.get('email') ? 'my' : 'interlocutor';
        let username = message.user.email == Cookies.get('email') ? '' : message.user.name;
        parametersMessage = new Message(message.text, message.createdAt, username, condition);
        addMessage(parametersMessage, 'prepend');
    });
}
export function renderCurrentMessage(data) {
    let condition = data.user.email == Cookies.get('email') ? 'my' : 'interlocutor';
    let username = data.user.email == Cookies.get('email') ? '' : data.user.name;
    parametersMessage = new Message(data.text, data.createdAt, username, condition);
    addMessage(parametersMessage, 'append');
}