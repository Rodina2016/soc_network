import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

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
        },
        sidebar: {},
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}


export default store;