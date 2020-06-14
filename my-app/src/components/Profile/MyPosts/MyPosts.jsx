import React from 'react';
import classes from './MyPosts.module.css';
import Post from "../Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const MyPosts = (props) => {

    let postsElements = props.posts
        .map(item => <Post message={item.text} likes={item.likesCount} key={item.id}/>);


    const onAddPost = (values) => {
        props.addPost(values.post);
    };

    return (
            <div className={classes.posts}>
                <h1>
                    My posts
                </h1>
                <div className={classes.form}>
                    <ReduxAddPostForm onSubmit={onAddPost}/>
                </div>
                { postsElements }
            </div>

    )
}

let maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form action="" onSubmit={handleSubmit}>
            <div>
                <Field type="text" typeFild={'textarea'} name={"post"} placeholder={"Enter post"} component={Textarea} validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>
                    Send
                </button>
            </div>
        </form>
    )
}
const ReduxAddPostForm = reduxForm({form: 'dialogAddMessageForm'})(AddPostForm);

export default MyPosts;