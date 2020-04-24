const Add_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, text: 'Hi', likesCount: 30},
        {id: 2, text: 'How are you', likesCount: 13},
        {id: 3, text: 'Hello', likesCount: 23},
    ],
    newPostText: 'It camasutra',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case Add_POST: {
            let newPost = {
                id: 4,
                text: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
    }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
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

 export default profileReducer;