const State = {
    profilePage: {
        posts: [
            {id:1, text: 'Hi', likesCount: 30},
            {id:2, text: 'How are you', likesCount: 13},
            {id:3, text: 'Hello', likesCount: 23},
        ],
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
export default State;