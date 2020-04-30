import React from "react";
import styles from './users.module.css';
import * as axios from "axios";

class Users extends React.Component{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div>
                <div>
                    {
                        pages.map(p => {
                             return <span className={this.props.currentPage === p && styles.selectedPage}
                             onClick={(e) => { this.onPageChanged(p) }}>{p}</span>;
                        })
                    }
                </div>
                {
                    this.props.users.map(u => {
                        return(
                            <div key={u.id}>
                                <div>{u.name}</div>
                                <div>
                                    <img src={u.photos.small != null ? u.photos.small : 'https://img.icons8.com/clouds/2x/user.png'} alt={u.name}/>
                                </div>
                                <div>{u.status}</div>
                                <div>{"u.location.city"}</div>
                                <div>{"u.location.country"}</div>
                                {u.follow ?
                                    <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                                    :
                                    <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Users;