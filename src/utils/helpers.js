export function validateEmail(checkEmail) {
    return (/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/).test(String(checkEmail).toLocaleLowerCase());
}