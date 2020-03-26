import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const  Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.item + ' ' + classes.active}>
                    <NavLink to='dialogs/1'>
                        Andrey
                    </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='dialogs/2'>
                        Sergey
                    </NavLink>
                </div>
                <div className={classes.item}>Anna</div>
            </div>
            <div className={classes.messages}>
                <div className={classes.messagesItem}>Hi</div>
                <div className={classes.messagesItem}>How are you?</div>
                <div className={classes.messagesItem}>Hello!</div>
            </div>
        </div>
    )
}

export default Dialogs;