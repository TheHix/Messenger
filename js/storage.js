export const storage = {
    getMessageHistory: function () {
        return JSON.parse(localStorage.getItem('messageHistory'));
    },
    saveMessageHistory: function (messages) {
        localStorage.setItem('messageHistory', JSON.stringify(messages));
    }
};