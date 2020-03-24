import React from 'react';
import classes from './MyPosts.module.css';
import Post from "../Post/Post";

const MyPosts = () => {
    return (
            <div className={classes.posts}>
                My posts
                <div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <div>
                        <button>Add post</button>
                        <button>Remove</button>
                    </div>
                </div>
               <Post message='Hi, how are you?' likes='10'/>
               <Post message="It's my first post" likes='21'/>
               <Post/>
            </div>

    )
}

export default MyPosts;