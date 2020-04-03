import React from 'react';
import classes from './MyPosts.module.css';
import Post from "../Post/Post";
import store from "../../../redux/state";

const MyPosts = (props) => {

    let postsElements = props.props.posts
        .map(item => <Post message={item.text} likes={item.likesCount} key={item.id}/>);

    let newPostElem = React.createRef();

    const addPost = () => {
        props.addPost();
    };

    const onPostChange = () => {
        let text = newPostElem.current.value;
        props.updateNewPostText(text);
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