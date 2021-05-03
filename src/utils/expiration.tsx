export function createExpirationTime() {
    return Date.now() + 10 * 1000;
}

let newId = 0;
export function createId() {
    const result = newId;
    newId += 1;
    return result;
}