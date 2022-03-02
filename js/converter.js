import {PAGE} from "./view.js";
export function addMessage({text, date, name = '', extraClass = 'my'}, method, moving) {
    let currentMessage = PAGE.TEMP.content.firstElementChild.cloneNode(true);
    currentMessage.classList.add(extraClass);
    currentMessage.children[0].innerHTML = name;
    currentMessage.children[1].innerHTML = text;
    currentMessage.children[2].innerHTML = getTime(date);
    method === 'append' ? PAGE.CHAT_BOX.append(currentMessage) : PAGE.CHAT_BOX.prepend(currentMessage);
    if (moving == 'moveScroll') {
        moveScroll();
    }
}   
export function getTime(timeMessage) {
    const time = timeMessage === undefined ? new Date() : new Date(timeMessage);
    
    const hours = time.getHours();
    const minutes = (time.getMinutes()) >= 10 ? time.getMinutes() : '0' + time.getMinutes();

    return `${hours}:${minutes}`;
}
export function moveScroll() {
    PAGE.MESSAGE_BODY.scrollTop = PAGE.MESSAGE_BODY.scrollHeight;
}
export class Message {
    constructor(text, createdAt, username, condition) {
        this.text = text;
        this.date = createdAt;
        this.name = username;
        this.extraClass = condition;
    }
}