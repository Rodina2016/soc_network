import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const  Dialogs = (props) => {
    console.log(props);

    let dialogElements = props.dialogs
        .map( item => <DialogItem name={item.name} id={item.id} key={item.id}/>);

    let messageElements = props.messages
        .map( item => <Message message={item.message} id={item.id} key={item.id}/>);


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if(!props.isAuth) {
        return <Redirect to={"/login"}/>
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogElements }
            </div>
            <div className={classes.messages}>
                <div>{messageElements}</div>
                <ReduxAddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

let maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form action="" onSubmit={handleSubmit}>
            <div>
                <Field type="text" typeFild={'textarea'} name={"newMessageBody"} placeholder={"Enter message"} component={Textarea} validate={[required, maxLength100]}/>
            </div>
            <div>
                <button>
                    Send
                </button>
            </div>
        </form>
    )
}
const ReduxAddMessageForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);


export default Dialogs;
