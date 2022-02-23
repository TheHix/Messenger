import {PAGE} from "./view.js";
import {createAddMessage} from "./converter";
export function renderUsername(data) {
    const username = data['name'] ?? 'Стив';
    
    PAGE.NAME_INPUT.value = username;
}
export function renderMessage(data) {
    PAGE.CHAT_BOX.innerHTML = "";

    for (let item of data.messages){
        createAddMessage(item.text, item.createdAt, item.user.name, 'interlocutor');
    }
}