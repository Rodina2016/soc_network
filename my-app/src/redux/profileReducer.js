import {UserAPI, ProfileAPI} from "../api/api";

const Add_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    posts: [
        {id: 1, text: 'Hi', likesCount: 30},
        {id: 2, text: 'How are you', likesCount: 13},
        {id: 3, text: 'Hello', likesCount: 23},
    ],

    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case Add_POST: {
            let newPost = {
                id: 4,
                text: action.body,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_USER_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;

    }

 }

export const addPostActionCreator = (post) => {
    return {
        type: Add_POST,
        body: post
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    }
}

export const setUserStatus = (status) => {
    return {
        type: SET_USER_STATUS,
        status: status
    }
}

export const getUserProfileThunkCreator = (usersId) => {
    return (dispatcher) => {
        UserAPI.getUserProfile(usersId)
            .then(response => {
                dispatcher(setUserProfile(response));
            });
    }
}

export const getUserStatusThunkCreator = (usersId) => {
    return (dispatcher) => {
        ProfileAPI.getUserStatus(usersId)
            .then(response => {
                dispatcher(setUserStatus(response.data));
            });
    }
}

export const updateUserStatusThunkCreator = (status) => {
    return (dispatcher) => {
        ProfileAPI.updateUserStatus(status)
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatcher(setUserStatus(status));
                }
            });
    }
}

export default profileReducer;