import React from 'react';
import classes from './MyPosts.module.css';
import Post from "../Post/Post";

const MyPosts = (props) => {

    let postsElements = props.props
        .map(item => <Post message={item.text} likes={item.likesCount} key={item.id}/>);

    let newPostElem = React.createRef();

    const addPost = () => {
        let text = newPostElem.current.value;
        alert(text);
    }

    return (
            <div className={classes.posts}>
                <h1>
                    My posts
                </h1>
                <div className={classes.form}>
                    <textarea name="" id="" cols="30" rows="10" ref={newPostElem}></textarea>
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