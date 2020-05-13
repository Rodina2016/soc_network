import React from "react";
import styles from './users.module.css';
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
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
                                    <button onClick={() => {

                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "246157dd-addb-43ff-96a8-b314a399a625"
                                            }

                                        })
                                            .then(response => {
                                                console.log(response.data);
                                                if(response.data.resultCode === 0) {
                                                    props.unfollow(u.id);
                                                }
                                            });

                                    }}>Unfollow</button>
                                    :
                                    <button onClick={() => {

                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "246157dd-addb-43ff-96a8-b314a399a625"
                                            }})
                                            .then(response => {
                                                console.log(response.data);
                                                if(response.data.resultCode === 0) {
                                                    props.follow(u.id);
                                                }
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