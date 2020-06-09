const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.body;
            stateCopy = {
                ...state,
                messages: [...state.messages, {id: 1, message: body}]
            }
            return stateCopy;
        default:
            return state;
    }

 }

export const sendMessageActionCreator = (newMessageBody) => {
    return {
        type: SEND_MESSAGE,
        body: newMessageBody
    }
}


 export default dialogsReducer;