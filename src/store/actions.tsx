export const SUCCESSFUL_LOGIN:string = 'SUCCESSFUL_LOGIN';
export const UNSUCCESSFUL_LOGIN:string = 'UNSUCCESSFUL_LOGIN';
export const LOG_OUT:string = 'LOG_OUT';
export const STORE_NEWS:string = 'STORE_NEWS';

export const credentialChecker = (username:string, password:string): {type: string} => {
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