export function changeTo(text) {
    return { type: 'CHANGE_TO', text};
}

export function changeCc(text) {
    return { type: 'CHANGE_CC', text};
}

export function changeDivision(text) {
    return { type: 'CHANGE_DIVISION', text};
}

export function changeName(text) {
    return { type: 'CHANGE_NAME', text};
}

export function changeGame(text) {
    return { type: 'CHANGE_GAME', text};
}

export function changeContent(text, index) {
    return { type: 'CHANGE_CONTENT', text, index};
}

export function changeId(text, index) {
    return { type: 'CHANGE_ID', text, index};
}

export function changePassword(text, index) {
    return { type: 'CHANGE_PASSWORD', text, index};
}

export function addId() {
    return { type: 'ADD_ID'};
}

export function deleteId() {
    return { type: 'DELETE_ID'};
}
