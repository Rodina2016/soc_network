const Add_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, text: 'Hi', likesCount: 30},
                {id: 2, text: 'How are you', likesCount: 13},
                {id: 3, text: 'Hello', likesCount: 23},
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
            newMessageBody: '',
        }
    },
    _callSubscriber () {
        console.log('state changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if(action.type === Add_POST) {
            let newPost = {
                id: 4,
                text: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({
                id: 1,
                message: body
            });
            this._callSubscriber(this._state);
        }

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

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: text,
    }
}

export default store;