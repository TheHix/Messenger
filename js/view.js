export const PAGE = {
    MODAl_WINDOWS: document.querySelectorAll('.pop-up__window'),
    BTN: document.querySelectorAll('.openWindowBtn'),
    SETTINGS_BTN: document.querySelector('.buttons_btnSettings'),
    SETTINGS_WINDOW: document.querySelector('.settings'),
    MAIN_WINDOW:document.querySelector('.main'),
    EXIT_BTN: document.querySelectorAll('.cross'),
    LOG_BTN: document.querySelector('.buttons_logInOut'),
    LOG_WINDOW: document.querySelector('.LogInOut'),
    EMAIL_FORM: document.querySelector('.authorization'),
    INPUT_EMAIL: document.querySelector('.authorization__email'),
    CODE_WINDOW: document.querySelector('.enterCode'),
    CONFIRMATION_FORM:document.querySelector('.confirmationForm'),
    CODEfromINPUT: document.querySelector('.confirmationForm__code'),
    TEMP: document.querySelector('#temp'),
    NAMEinMESSAGE: document.querySelector('.chatBox__nameInterlocuto'),
    MESSAGE_BAR: document.querySelector('.sendMessage__bar'),
    INPUT_BAR: document.querySelector('.sendMessage__input'),
    CHAT_BOX: document.querySelector('.chatBox'),
    MESSAGE_BODY: document.querySelector('.chat'),
    NAME_FORM: document.querySelector('.nameChoice'),
    NAME_INPUT: document.querySelector('.nameChoice__input')
};
export const URL = {
    USER: 'https://chat1-341409.oa.r.appspot.com/api/user',
    USER_ME: 'https://chat1-341409.oa.r.appspot.com/api/user/me',
    MESSAGE: 'https://chat1-341409.oa.r.appspot.com/api/messages/'
};

export const CHANGE = {
    displayUsername: function (data) {
        const username = data['name'] ?? 'Стив';
        PAGE.NAME_INPUT.value = username;
    },
    displayMessage: function (date) {
        PAGE.CHAT_BOX.innerHTML = "";
    
        for (let item of date){
            CONSTRUCT.addMessage(item.message, item.createdAt, item.username, 'interlocutor');
        }
    },
};
export const CONSTRUCT = {
    addMessage: function (text, date, name = '', extraClass = 'my') {
        let currentMessage = PAGE.TEMP.content.firstElementChild.cloneNode(true);

        currentMessage.classList.add(extraClass);
        currentMessage.children[0].innerHTML = name;
        currentMessage.children[1].innerHTML = text;
        currentMessage.children[2].innerHTML = this.getTime(date);

        PAGE.CHAT_BOX.append(currentMessage);
    },
    getTime: function (timeMessage) {
        const time = timeMessage === undefined ? new Date() : new Date(timeMessage);
        
        const hours = time.getHours();
        const minutes = (time.getMinutes()) >= 10 ? time.getMinutes() : '0' + time.getMinutes();
    
        return `${hours}:${minutes}`;
    }
};