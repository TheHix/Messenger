import {PAGE} from "./view.js";
export function modalWindowCallLogic() {
    PAGE.BTN.forEach((event) => {
        event.addEventListener('click', (e) => {
            PAGE.MODAl_WINDOWS.forEach((e) => {
                e.classList.remove('active');
            });
            let pathBtn = e.currentTarget.getAttribute('data-path');
            PAGE.MAIN_WINDOW.classList.add('blur');
            document.querySelector(`[data-target = ${pathBtn}]`).classList.add('active');
        });
    });
    PAGE.EMAIL_FORM.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!PAGE.INPUT_EMAIL.value) return;
        // requestAuthenticationCode({email: PAGE.INPUT_EMAIL.value});
        PAGE.MODAl_WINDOWS.forEach((e) => {
            e.classList.remove('active');
        });
        let pathSubmit = PAGE.EMAIL_FORM.getAttribute('data-path');
        PAGE.MAIN_WINDOW.classList.add('blur');
        document.querySelector(`[data-target = ${pathSubmit}]`).classList.add('active');
    });
    PAGE.EXIT_BTN.forEach((event) => {
        event.addEventListener('click', (e) => {
            e.currentTarget.parentElement.classList.remove('active');
            PAGE.MAIN_WINDOW.classList.remove('blur');
        });
    });
    PAGE.CONFIRMATION_FORM.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!PAGE.CODEfromINPUT.value) return;
        PAGE.CONFIRMATION_FORM.parentElement.classList.remove('active');
        PAGE.MAIN_WINDOW.classList.remove('blur');
    });
    PAGE.NAME_FORM.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!PAGE.NAME_INPUT.value) return;
        PAGE.NAME_FORM.parentElement.classList.remove('active');
        PAGE.MAIN_WINDOW.classList.remove('blur');
    });

}