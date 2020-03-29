import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const  Dialogs = (props) => {

    let dialogElements = props.dialogsData.dialogs
        .map( item => <DialogItem name={item.name} id={item.id} key={item.id}/>);

    let messageElements = props.dialogsData.messages
        .map( item => <Message message={item.message} id={item.id} key={item.id}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogElements }
            </div>
            <div className={classes.messages}>
                { messageElements }
            </div>
        </div>
    )
}

export default Dialogs;