import * as actionTypes from '../store/actions'

const initialState = {
    authenticated: false,
    loginError: false,
    news: undefined
}

const reducer = (state=initialState, action) => {
    if (action.type === actionTypes.SUCCESSFUL_LOGIN) {
        return {
            ...state,
            authenticated: true,
            loginError: false
        };
    }
    if (action.type === actionTypes.UNSUCCESSFUL_LOGIN) {
        return {
            ...state,
            authenticated: false,
            loginError: true
        }
    }
    if (action.type === actionTypes.LOG_OUT) {
        return {
            ...state,
            authenticated: false
        }
    }
    if (action.type === actionTypes.STORE_NEWS) {
        return {
            ...state,
            news: action.payload
        }
    }
    return state;
    
}

export default reducer;