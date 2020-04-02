let rerenderTree = () => {
    console.log('state changed');
}
const state = {
    profilePage: {
        posts: [
            {id:1, text: 'Hi', likesCount: 30},
            {id:2, text: 'How are you', likesCount: 13},
            {id:3, text: 'Hello', likesCount: 23},
        ],
        newPostText: 'It camasutra',
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Sergey'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Olga'},
            {id: 4, name: 'Sam'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Hello'},
        ],
    }
}

export const subscribe = (observer) => {
    rerenderTree = observer;
}

export const addPost = () => {
    let newPost = {
        id: 4,
        text: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderTree(state);
}

export const updateNewPostText = (text) => {
    state.profilePage.newPostText = text;

    rerenderTree(state);
}

export default state;