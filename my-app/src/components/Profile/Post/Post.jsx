import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
            <div className={classes.item}>
                <img src="https://nulm.gov.in/images/user.png" alt=""/>
                {props.message}
                <div>
                    <span>Like {props.likes}</span>
                </div>
            </div>
    )
}

export default Post;