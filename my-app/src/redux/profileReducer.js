const Add_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, text: 'Hi', likesCount: 30},
        {id: 2, text: 'How are you', likesCount: 13},
        {id: 3, text: 'Hello', likesCount: 23},
    ],
    newPostText: 'It camasutra',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case Add_POST: {
            let newPost = {
                id: 4,
                text: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
    }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.text
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;

    }

 }


export const addPostActionCreator = () => {
    return {
        type: Add_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    }
}

 export default profileReducer;