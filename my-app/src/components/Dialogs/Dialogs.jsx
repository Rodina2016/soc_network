import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const  Dialogs = (props) => {
    console.log(props);

    let dialogElements = props.dialogs
        .map( item => <DialogItem name={item.name} id={item.id} key={item.id}/>);

    let messageElements = props.messages
        .map( item => <Message message={item.message} id={item.id} key={item.id}/>);

    let newMessageBody = props.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        const body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogElements }
            </div>
            <div className={classes.messages}>
                <div>{messageElements}</div>
                <div>
                    <div>
                        <textarea placholder='Enter your message' value={newMessageBody} onChange={onNewMessageChange}/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;