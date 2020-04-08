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
        if(action.type === 'ADD-POST') {
            let newPost = {
                id: 4,
                text: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }

    }

}

export default store;