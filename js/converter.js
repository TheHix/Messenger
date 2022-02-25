import {PAGE} from "./view.js";
export function createAddMessage(text, date, name = '', extraClass = 'my') {
    let currentMessage = PAGE.TEMP.content.firstElementChild.cloneNode(true);

    currentMessage.classList.add(extraClass);
    currentMessage.children[0].innerHTML = name;
    currentMessage.children[1].innerHTML = text;
    currentMessage.children[2].innerHTML = getTime(date);

    PAGE.CHAT_BOX.append(currentMessage);
    moveScroll();
}
export function getTime(timeMessage) {
    const time = timeMessage === undefined ? new Date() : new Date(timeMessage);
    
    const hours = time.getHours();
    const minutes = (time.getMinutes()) >= 10 ? time.getMinutes() : '0' + time.getMinutes();

    return `${hours}:${minutes}`;
}
function moveScroll() {
    console.log(PAGE.MESSAGE_BODY.scrollHeight);
    PAGE.MESSAGE_BODY.scrollTop = PAGE.MESSAGE_BODY.scrollHeight;
}