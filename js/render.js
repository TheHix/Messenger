import {PAGE} from "./view.js";
import {createAddMessage} from "./converter";
export function renderUserData(data) {
    const username = data['name'] ?? 'Стив';
    PAGE.NAME_INPUT.value = username;
    PAGE.INPUT_EMAIL.value = data.email;
}
export function renderMessage(data) {
    PAGE.CHAT_BOX.innerHTML = "";
    for (let item of data.messages){
        let condition = item.user.email == PAGE.INPUT_EMAIL.value ? 'my' : 'interlocutor';
        let username = item.user.email == PAGE.INPUT_EMAIL.value ? '' : item.user.name;
        createAddMessage(item.text, item.createdAt, username, condition);
    }
}
export function renderCurrentMessage(data) {
    console.log(data);
    let condition = data.user.email == PAGE.INPUT_EMAIL.value ? 'my' : 'interlocutor';
    let username = data.user.email == PAGE.INPUT_EMAIL.value ? '' : data.user.name;
    createAddMessage(data.text, data.createdAt, username, condition);
}