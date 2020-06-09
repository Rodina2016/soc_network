import React from 'react';
import classes from './MyPosts.module.css';
import Post from "../Post/Post";
import {Field, reduxForm} from "redux-form";

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

const AddPostForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form action="" onSubmit={handleSubmit}>
            <div>
                <Field type="text" name={"post"} placeholder={"Enter post"} component={"textarea"}/>
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