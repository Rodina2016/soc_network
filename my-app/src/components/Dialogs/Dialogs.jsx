import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={classes.item}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.messagesItem}>{props.message}</div>
    )
}

const  Dialogs = () => {

    let dialogData = [
        {id: 1, name: 'Sergey'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Olga'},
        {id: 4, name: 'Sam'},
    ];

    let dialogElements = dialogData
        .map( item => <DialogItem name={item.name} id={item.id}/>);

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Hello'},
    ];

    let massegeElements = messagesData
        .map( item => <Message message={item.message} id={item.id}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogElements }
            </div>
            <div className={classes.messages}>
                { massegeElements }
            </div>
        </div>
    )
}

export default Dialogs;