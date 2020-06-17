import {authAPI, UserAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state,
            ...action.data,
          }
        default:
            return state;
    }
}


export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        data: {userId, email, login, isAuth}
    }
}

export const getAuthDataThunkCreater = () => {
    return (dispatch) => {
        return UserAPI.getAuthData()
            .then(response => {
                console.log(response);
                if(response.resultCode === 0) {
                    let {email, id, login} = response.data;
                    dispatch(setAuthUserData(id, email, login, true));
                }
            });
    }
}

export const loginThunkCreator = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                console.log(response);
                if(response.data.resultCode === 0) {
                    dispatch(getAuthDataThunkCreater());
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
                    let action = stopSubmit("login", {_error: message});
                    dispatch(action)
                }
            });
    }
}

export const logoutThunkCreator = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                }
            });
    }
}


export default authReducer;