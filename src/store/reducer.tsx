import * as actionTypes from '../store/actions'

export interface INewsItem {
    author: string;
    title: string; 
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string; 
    content: string;
}

export interface IReducerState {
    authenticated: boolean;
    loginError: boolean;
    news: INewsItem[];
}

const initialState:IReducerState = {
    authenticated: false,
    loginError: false,
    news: []
}

const reducer = (state=initialState, action) => {

    switch(action.type){
        case actionTypes.SUCCESSFUL_LOGIN:
            return {
                ...state,
                authenticated: true,
                loginError: false
            };
        case actionTypes.UNSUCCESSFUL_LOGIN:
            return {
                ...state,
                authenticated: false,
                loginError: true
            }
        case actionTypes.LOG_OUT:
            return {
                ...state,
                authenticated: false
            }
        case actionTypes.STORE_NEWS:
            return {
                ...state,
                news: action.payload
            }
        default:
            return state;
    }



    
    
}

export default reducer;