export const SUCCESSFUL_LOGIN = 'SUCCESSFUL_LOGIN';
export const UNSUCCESSFUL_LOGIN = 'UNSUCCESSFUL_LOGIN';

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