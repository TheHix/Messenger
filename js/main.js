import {PAGE, URL} from "./view.js";
import Cookies from 'js-cookie';
PAGE.EXIT_BTN.forEach((e) => {
    e.addEventListener('click', () => {
        closeWindows();
        PAGE.MAIN_WINDOW.classList.remove('blur');
    });
});
PAGE.SETTINGS_BTN.addEventListener('click', () => {
    closeWindows();
    PAGE.SETTINGS_WINDOW.classList.add('active');
    PAGE.MAIN_WINDOW.classList.add('blur');
    PAGE.NAME_FORM.addEventListener('submit', (e) => {
        e.preventDefault();
        requestUsername(PAGE.NAME_INPUT.value, Cookies.get('token'));
    });
});
PAGE.LOG_BTN.addEventListener('click', () => {
    closeWindows();
    PAGE.LOG_WINDOW.classList.add('active');
    PAGE.MAIN_WINDOW.classList.add('blur');
    PAGE.EMAIL_FORM.addEventListener('submit', (e) => {
        e.preventDefault();
        requestAuthenticationCode({email: PAGE.INPUT_EMAIL.value});
        closeWindows();
        PAGE.CODE_WINDOW.classList.add('active');
        PAGE.CONFIRMATION_FORM.addEventListener('submit', (e) => {
            e.preventDefault();
            Cookies.set('token', PAGE.CODEfromINPUT.value);
            closeWindows();
            PAGE.MAIN_WINDOW.classList.remove('blur');
        });
    });
});
PAGE.MESSAGE_BAR.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!PAGE.INPUT_BAR.value) return;
    let currentMessage = PAGE.TEMP.content.firstElementChild.cloneNode(true);
    currentMessage.firstElementChild.innerHTML = PAGE.INPUT_BAR.value;
    currentMessage.lastElementChild.innerHTML = getTime();
    PAGE.CHAT_BOX.append(currentMessage);
    moveScroll();
    PAGE.INPUT_BAR.value = "";
});
async function requestAuthenticationCode(email) {
    try {
        const response = await fetch(URL, {
            method: 'POST',
            body: JSON.stringify(email),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json();
        return JSON.stringify(json);
    } catch (error) {
        console.error(error);
    }
}
async function requestUsername(name, token) {
    try {
        const response = await fetch(URL, {
            method: 'PATCH',
            body: JSON.stringify({'name' : name}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        const json = await response.json();
        return JSON.stringify(json);
    } catch (error) {
        console.error(error);
    }
}
function closeWindows() {
    PAGE.SETTINGS_WINDOW.classList.remove('active');
    PAGE.LOG_WINDOW.classList.remove('active');
    PAGE.CODE_WINDOW.classList.remove('active');
}
function getTime() {
    let minutes = new Date().getMinutes().lenght == 2 ? new Date().getMinutes() : '0' + new Date().getMinutes();
    return `${new Date().getHours()}:${minutes}`;
}
function moveScroll() {
    PAGE.MESSAGE_BODY.scrollTop = PAGE.MESSAGE_BODY.scrollHeight;
}