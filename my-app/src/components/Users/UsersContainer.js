import Users from "./Users";
import {connect} from 'react-redux'
import {
    follow,
    setCurrentPage, setFollowingProgress,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "../../redux/usersReduser";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import {getUsers} from "../../api/api";

class UsersComponent extends React.Component{

    componentDidMount() {
        this.props.setIsFetching(true);

        getUsers( this.props.currentPage ,this.props.pageSize)
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.items);
                this.props.setTotalUsersCount(response.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true);

        getUsers(pageNumber, this.props.pageSize)
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.items);
            });
    }

    render() {
        if(this.props.isFetching){
            return <Preloader/>
        } else {
            return (
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged ={this.onPageChanged}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       setFollowingProgress={this.props.setFollowingProgress}
                       followingInProgress ={this.props.followingInProgress}
                />
            )
        }


    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        setIsFetching,
        setFollowingProgress,
    })(UsersComponent);