export const SUCCESSFUL_LOGIN = 'SUCCESSFUL_LOGIN';
export const UNSUCCESSFUL_LOGIN = 'UNSUCCESSFUL_LOGIN';
export const LOG_OUT = 'LOG_OUT';
export const STORE_NEWS = 'STORE_NEWS';

export const credentialChecker = (username, password) => {
    if(username === 'Admin' && password === "12345") {
        return {
            type: SUCCESSFUL_LOGIN
        }
    } else {
        return {
            type: UNSUCCESSFUL_LOGIN
        }
    }
}