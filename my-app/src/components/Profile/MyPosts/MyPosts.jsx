import React from 'react';
import classes from './MyPosts.module.css';
import Post from "../Post/Post";

const MyPosts = () => {

    let postData = [
        {id:1, text: 'Hi', likesCount: 30},
        {id:2, text: 'How are you', likesCount: 13},
        {id:3, text: 'Hello', likesCount: 23},
    ]

    let postsElements = postData
        .map(item => <Post message={item.text} likes={item.likesCount}/>);

    return (
            <div className={classes.posts}>
                <h1>
                    My posts
                </h1>
                <div className={classes.form}>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <div>
                        <button>Add post</button>
                        <button>Remove</button>
                    </div>
                </div>
                { postsElements }
            </div>

    )
}

export default MyPosts;