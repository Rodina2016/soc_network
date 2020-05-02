import React from "react";
import styles from './users.module.css';

let Users = (props) => {
console.log(props);
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
                        <div key={u.id} className={styles.item}>
                            <div className={styles.wrap}>
                                <div className={styles.name}>{u.name}</div>
                                <div>
                                    <img src={u.photos.small != null ? u.photos.small : 'https://img.icons8.com/clouds/2x/user.png'} alt={u.name}/>
                                </div>
                                <div>{u.status}</div>
                                <div>{"u.location.city"}</div>
                                <div>{"u.location.country"}</div>
                                {u.follow ?
                                    <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                    :
                                    <button onClick={() => { props.follow(u.id) }}>Follow</button>}
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