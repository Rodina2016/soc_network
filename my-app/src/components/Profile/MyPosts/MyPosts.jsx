import React from 'react';
import classes from './MyPosts.module.css';
import Post from "../Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";

const MyPosts = (props) => {

    let postsElements = props.props.posts
        .map(item => <Post message={item.text} likes={item.likesCount} key={item.id}/>);

    let newPostElem = React.createRef();

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    const onPostChange = () => {
        let text = newPostElem.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
            <div className={classes.posts}>
                <h1>
                    My posts
                </h1>
                <div className={classes.form}>
                    <textarea name="" id="" cols="30" rows="10" ref={newPostElem} value={props.props.newPostText} onChange={onPostChange}/>
                    <div>
                        <button onClick={addPost}>Add post</button>
                        <button>Remove</button>
                    </div>
                </div>
                { postsElements }
            </div>

    )
}

export default MyPosts;