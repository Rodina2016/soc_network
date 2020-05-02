import Users from "./Users";
import {connect} from 'react-redux'
import {
    followAC,
    setCurrentPageAC,
    setIsFetchingAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC
} from "../../redux/usersReduser";
import React from "react";
import * as axios from "axios";
import Preloader from "../common/Preloader/Preloader";

class UsersComponent extends React.Component{

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <>
            <Preloader isFetching={this.props.isFetching} />
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged ={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
            />
            </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (user_id) => {
            dispatch(followAC(user_id));
        },
        unfollow: (user_id) => {
            dispatch(unfollowAC(user_id));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent);