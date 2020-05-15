import React from "react";
import styles from './users.module.css';
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {followUser, unFollowUser} from "../../api/api";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);

        console.log(props);
    }

    return (
        <div>
            <div className={styles.pagination}>
                {
                    pages.map(p => {
                        return <span className={`${props.currentPage === p && styles.selectedPage} ${styles.pagination__item}`}
                                     onClick={(e) => { props.onPageChanged(p) }}>{p}</span>;
                    })
                }
            </div>
            <div className={styles.users}>
            {

                props.users.map(u => {
                    return(
                        <div className={styles.item} key={u.id}>
                            <div className={styles.wrap}>
                                <div className={styles.name}>{u.name}</div>
                                <NavLink to={`/profile/${u.id}`}>
                                    <img src={u.photos.small != null ? u.photos.small : 'https://img.icons8.com/clouds/2x/user.png'} alt={u.name}/>
                                </NavLink>
                                <div>{u.status}</div>
                                <div>{"u.location.city"}</div>
                                <div>{"u.location.country"}</div>
                                {u.followed ?
                                    <button disabled={props.followingInProgress.some(item => item === u.id)} onClick={() => {
                                        props.setFollowingProgress(true, u.id);
                                        unFollowUser(u.id)
                                            .then(response => {
                                                if(response.resultCode === 0) {
                                                    props.unfollow(u.id);
                                                }
                                                props.setFollowingProgress(false, u.id);
                                            });

                                    }}>Unfollow</button>
                                    :
                                    <button disabled={props.followingInProgress.some(item => item === u.id)} onClick={() => {
                                        props.setFollowingProgress(true, u.id);
                                        followUser(u.id)
                                            .then(response => {
                                                console.log(response);
                                                if(response.resultCode === 0) {
                                                    props.follow(u.id);
                                                }
                                                props.setFollowingProgress(false, u.id);
                                            });
                                    }}>Follow</button>}
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Users;