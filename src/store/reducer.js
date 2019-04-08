import { SUCCESSFUL_LOGIN } from '../store/actions';
import { UNSUCCESSFUL_LOGIN } from '../store/actions';

const initialState = {
    authenticated: false,
    loginError: false
}

const reducer = (state=initialState, action) => {
    if (action.type === SUCCESSFUL_LOGIN) {
        return {
            ...state,
            authenticated: true,
            loginError: false
        };
    }
    if (action.type === UNSUCCESSFUL_LOGIN) {
        return {
            ...state,
            authenticated: false,
            loginError: true
        }
    }
    return state;
    
}

export default reducer;