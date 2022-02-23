import {URL} from "./view.js";
import {renderMessage, renderUsername} from "./render.js";
export async function requestAuthenticationCode(email) {
    try {
        const response = await fetch(URL.USER, {
            method: 'POST',
            body: JSON.stringify(email),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json();
        console.log(JSON.stringify(json));
    } catch (error) {
        console.error(error);
    }
}
export async function changeUsername(username, token) {
    try {
        const response = await fetch(URL.USER, {
            method: 'PATCH',
            body: JSON.stringify({'name' : username}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        const json = await response.json();
        console.log(JSON.stringify(json)); 
    } catch (error) {
        console.error(error);
    }
}
export async function requestUsername(token) {
    try {
        const response = await fetch(URL.USER_ME, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const json = await response.json();
        renderUsername(json);
    } catch (error) {
        console.error(error);
    }
}
export async function requestMessage(token) {
    try {
        const response = await fetch(URL.MESSAGE, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const json = await response.json();
        renderMessage(json);
    } catch (error) {
        console.error(error);
    }
}