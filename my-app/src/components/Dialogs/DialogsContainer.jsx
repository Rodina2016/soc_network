import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const  DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState();

                    let onSendMessageClick = () => {
                        let action = sendMessageActionCreator();
                        store.dispatch(action);
                    }

                    let onNewMessageChange = (body) => {
                        let action = updateNewMessageBodyCreator(body);
                        store.dispatch(action);
                    }

                    return (
                        <Dialogs sendMessage={onSendMessageClick}
                                 updateNewMessageBody={onNewMessageChange}
                                 dialogs={state.dialogsPage.dialogs}
                                 messages={state.dialogsPage.messages}
                                 newMessageBody={state.dialogsPage.newMessageBody}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;