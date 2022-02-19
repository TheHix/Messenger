export const PAGE = {
    SETTINGS_BTN: document.querySelector('.buttons_btnSettings'),
    SETTINGS_WINDOW: document.querySelector('.settings'),
    MAIN_WINDOW:document.querySelector('.main'),
    EXIT_BTN: document.querySelectorAll('.cross'),
    LOG_BTN: document.querySelector('.buttons_logInOut'),
    LOG_WINDOW: document.querySelector('.LogInOut'),
    EMAIL_FORM: document.querySelector('.LogInOut__authorizationForm.authorization'),
    INPUT_EMAIL: document.querySelector('.authorization__email'),
    CODE_WINDOW: document.querySelector('.enterCode'),
    CONFIRMATION_FORM:document.querySelector('.confirmationForm'),
    CODEfromINPUT: document.querySelector('.confirmationForm__code'),
    TEMP: document.querySelector('#temp'),
    MESSAGE_BAR: document.querySelector('.sendMessage__bar'),
    INPUT_BAR: document.querySelector('.sendMessage__input'),
    CHAT_BOX: document.querySelector('.chatBox'),
    MESSAGE_BODY: document.querySelector('.chat'),
    NAME_FORM: document.querySelector('.nameChoice'),
    NAME_INPUT: document.querySelector('.nameChoice__input')
};
export const API = {
    GENERAL_URL: 'https://chat1-341409.oa.r.appspot.com/api/user',
    PERSON_URL: 'https://chat1-341409.oa.r.appspot.com/api/user/me'
};