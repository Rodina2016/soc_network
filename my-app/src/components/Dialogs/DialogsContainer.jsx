import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const  DialogsContainer = (props) => {

    let state = props.store.getState();

    let onSendMessageClick = () => {
        let action = sendMessageActionCreator();
        props.store.dispatch(action);
    }

    let onNewMessageChange = (body) => {
        let action = updateNewMessageBodyCreator(body);
        props.store.dispatch(action);
    }

    return (
       <Dialogs sendMessage={onSendMessageClick}
                updateNewMessageBody={onNewMessageChange}
                dialogs={state.dialogsPage.dialogs}
                messages={state.dialogsPage.messages}
                newMessageBody={state.dialogsPage.newMessageBody}/>
    )
}

export default DialogsContainer;